<?php
header('Access-Control-Allow-Origin: *'); 
  header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
  
  $json = file_get_contents('php://input');
 
  $params = json_decode($json);
  
  include("conexion.php");
  

  $sql = "EXEC altaUsuario @NOM='$params->Nombre', @USU='$params->Usuario', @FECHA='$params->FechaAlta'";

  $resultado = $conexion->prepare($sql);
  $resultado->execute();
  
  class Result {}

  $response = new Result();
  $response->resultado = 'OK';
  $response->mensaje = 'datos grabados';

  header('Content-Type: application/json');
  echo json_encode($response);
  ?>