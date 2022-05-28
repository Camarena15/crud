<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  include("conexion.php");

  $sql = "EXEC consultaUsuarioporUser @USU='$params->Usuario'";
  $resultado = $conexion->prepare($sql);
  $resultado->execute();
  $data=$resultado->fetchAll(PDO::FETCH_ASSOC);
  $vec=[];
  foreach ($data as $reg):
    $vec[]=$reg;
  endforeach;
  
  $cad=json_encode($vec);
  echo $cad;
  header('Content-Type: application/json');
?>