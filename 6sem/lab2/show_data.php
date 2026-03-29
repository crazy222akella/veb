<?php
    // $file_name = "lab1_Troshkin.txt";
    // $file = fopen($file_name, "r");
    $header = "Сохраненные данные";
    require_once "blocks/header.php";
    // $content = fread($file, filesize($file_name));
    // echo "<pre>". $content . "</pre>";
    // fclose($file);
    $servername = "localhost";
    $username = "user_veb_apache"; 
    $password = "260019983";
    $dbname = "lab2";

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check connection
    if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
    }
    $sql = "SELECT * FROM lab2";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
    // Output data of each row
        while($row = $result->fetch_assoc()) {
            echo "name: " . $row["user_name"]. " - email: " . $row["email"]. " - age: " . $row["age"]. " - birthdate: ". $row['birthdate']. " - phone: ". $row['phone']. " - date: ". $row['date'] . "<br>";
        }
    } else {
        echo "0 results";
    }
?>
