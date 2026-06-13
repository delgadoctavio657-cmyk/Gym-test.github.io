<?php
function obtenerConexion() {
    $host = "localhost";
    $baseDatos = "powerfit_gym";
    $usuario = "root";
    $contrasena = "";
    $charset = "utf8mb4";

    $dsn = "mysql:host=" . $host . ";dbname=" . $baseDatos . ";charset=" . $charset;
    $opciones = array(
        PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES => false
    );

    return new PDO($dsn, $usuario, $contrasena, $opciones);
}
