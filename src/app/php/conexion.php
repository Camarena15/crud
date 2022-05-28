<?php

        $serverName = "LAPTOP-LK5KS500\DAISYGIGABYTE"; //serverName\instanceName
        $nombreBaseDeDatos = "crud";
        try {
            $conexion = new PDO("sqlsrv:server=$serverName;database=$nombreBaseDeDatos");
            $conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        } catch (Exception $e) {
            echo "Ocurrió un error con la base de datos: " . $e->getMessage();
        }

?>


