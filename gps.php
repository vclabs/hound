<?php
$lat = $_POST['lat'] ?? 'null';
$lon = $_POST['lon'] ?? 'null';
$ua = $_SERVER['HTTP_USER_AGENT'];

$log = "Latitude: $lat | Longitude: $lon | User-Agent: $ua\n";
file_put_contents("data.txt", $log, FILE_APPEND);
?>
