<?php 
  header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  include("conexion.php");
  $idUsuario = (isset($_GET['idUsuario'])) ? $_GET['idUsuario'] : '';
  $sql = "EXEC bajaUsuario @ID=$idUsuario";
  $resultado = $conexion->prepare($sql);
  $resultado->execute();
    
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'usuario borrado';

  header('Content-Type: application/json');
  echo json_encode($response);  
?>