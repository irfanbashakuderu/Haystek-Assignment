<?php
$data = file_get_contents('json/data.json');
header('Content-Type: application/json');
echo $data;
?>