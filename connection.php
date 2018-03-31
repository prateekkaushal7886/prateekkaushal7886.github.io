<?php
$DB_NAME = 'sac_vishal';
$DB_HOST = 'localhost';
$DB_USER = 'b0q1tdyvh3yo';
$DB_PASS = 'Prateek#01';
$connection = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
if ($connection->connect_error) {
  // die("Connecton failed: ".$connection->connect_error);
  die("It seems that we cannot talk to our DB right now. Please try again in a couple of minutes");
} else {
//  echo "Connection Successful<br>";
}
?>