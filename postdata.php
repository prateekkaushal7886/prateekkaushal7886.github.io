<?php
/*
$servername = "localhost";
$username = "b0q1tdyvh3yo";
$password = "Prateek#01";
$dbname = "sac_vishal";
$name=$_POST["name"];
$phone=$_POST["phone"];
$mail=$_POST["email"];
$sugg=$_POST["Message"];


// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "INSERT INTO vishal (name , phone , mail , suggestion)
VALUES ('$name','$phone','$mail','$sugg')";

if (mysqli_query($conn, $sql)) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

//header("Location: http://www.yourwebsite.com/user.php"); 
//exit();
$message = "wrong answer";
*/


session_start();
require 'connection.php';
$servername = "localhost";
$username = "b0q1tdyvh3yo";
$password = "Prateek#01";
$dbname = "sac_vishal";
$connection = new mysqli($DB_HOST, $DB_USER, $DB_PASS, $DB_NAME);
if ($connection->connect_error) {
  // die("Connecton failed: ".$connection->connect_error);
  die("It seems that we cannot talk to our DB right now. Please try again in a couple of minutes");
} else {
//  echo "Connection Successful<br>";
}
$name=$_POST["name"];
$phone=$_POST["phone"];
$mail=$_POST["email"];
$sugg=$_POST["Message"];


$sql = "INSERT INTO vishal (name , phone , mail , suggestion)
VALUES ('$name','$phone','$mail','$sugg')";
echo '2';
if ($connection->query($sql)) {
  $connection->close();
 // header('Location: ./registration-complete.php');
  exit;
} else {
  echo "Error: " . $connection->error;
}




?>