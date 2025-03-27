<?php
$host = "mysql.hostinger.com"; // Hostinger MySQL Hostname
$user = "u914819046_faizan"; // Hostinger Database Username
$pass = "Faizan@9560"; // Hostinger Database Password
$dbname = "u914819046_360creativedes"; // Hostinger Database Name

$conn = new mysqli($host, $user, $pass, $dbname);

// Check Connection
if ($conn->connect_error) {
    die("Database Connection Failed: " . $conn->connect_error);
}

// Getting form data
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Insert Query
$sql = "INSERT INTO contacts (name, email, message) VALUES ('$name', '$email', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "success";
} else {
    echo "error";
}

$conn->close();
?>
