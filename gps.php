<?php
$lat = $_POST['lat'] ?? 'unknown';
$lon = $_POST['lon'] ?? 'unknown';
$ua = $_SERVER['HTTP_USER_AGENT'];

$log = "Latitude: $lat | Longitude: $lon | User-Agent: $ua\n";
file_put_contents("gps.txt", $log, FILE_APPEND);
?>
