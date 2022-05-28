<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  include("conexion.php");
  $sql = "EXEC consultaGeneral";
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