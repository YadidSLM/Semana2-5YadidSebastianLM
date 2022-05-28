<?php
    require "config.php";

    $con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema);

    $nombre =  (isset($_POST['nombre']) &&  $_POST['nombre'] != '')? $_POST['nombre'] : FALSE;
    $altura =  (isset($_POST['altura']) &&  $_POST['altura'] != '')? $_POST['altura'] : FALSE;
    $peso =  (isset($_POST['peso']) &&  $_POST['peso'] != '')? $_POST['peso'] : FALSE;
    $exp_base =  (isset($_POST['exp_base']) &&  $_POST['exp_base'] != '')? $_POST['exp_base'] : FALSE;
    $tipo =  (isset($_POST['tipo']) &&  $_POST['tipo'] != '')? $_POST['tipo'] : FALSE;

    $sql = "INSERT INTO pokemon VALUES(null, '$nombre', $altura, $peso, $exp_base, $tipo)";
    $res = mysqli_query($con, $sql);

    if($res == false)
    {
        $respuesta = array("ok" => false,
                            "texto" => "No se pudo ingresar");
        echo json_encode($respuesta);
    }
    else
    {
        $id = mysqli_insert_id($con);
        $sql = "INSERT INTO  pokemon_types VALUES($id, $tipo, 1)"
        $respuesta = array("ok" => true,
                            "id" => ,
                            "texto" => "Se pudo ingresar");
        echo json_encode($respuesta);
    }

    
?>