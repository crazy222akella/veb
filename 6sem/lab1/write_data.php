<?php
    $file = fopen("lab1_Troshkin.txt", "w");
    $username = $_POST['name'];
    $email = $_POST['email'];
    $age = $_POST['age'];
    $birthdate = $_POST['birthdate'];
    $phone = $_POST['phone'];
    $date = date('j:F:Y H:i:s');

    if(trim($username) == ""){
        echo "Введите имя";
    }
    else if(trim($email) == "" || trim($age) == "" || trim($birthdate) == ""){
        echo "введите все данные";
    }
    
    foreach($_POST as $key => $value){
        fwrite($file, $key . ":" .$value . "\n");
    }
    fwrite($file,"date: " . $date . "\n");
    fwrite($file, "IP: " . $_SERVER['REMOTE_ADDR'] . "\n");
    fwrite($file, "User information: " . $_SERVER['HTTP_USER_AGENT'] . "\n");

    fclose($file);

    header('Location: /show_data.php');
    exit;

