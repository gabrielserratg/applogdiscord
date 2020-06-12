<?php
error_reporting(0);
$DELETE = $_GET['pin'];
 $data = file("logs_users");
 $out = array();
 $fp = fopen("logs_users", "w+");
 flock($fp, LOCK_EX);
 foreach($out as $line) {
     fwrite($fp, $line);
 }
 flock($fp, LOCK_UN);
 fclose($fp);
 ?>
