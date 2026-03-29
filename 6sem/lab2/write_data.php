<?php
$host = 'localhost';
$db   = 'lab2';
$user = 'user_veb_apache';
$pass = '260019983';
$charset = 'utf8mb4';

// 1. Получаем данные
$username = $_POST['name'];
$email    = $_POST['email'];
$age      = $_POST['age'];
$birthdate= $_POST['birthdate'];
$phone    = $_POST['phone'];

// 2. Формируем дату 
$current_date = date('Y-m-d'); 

// 3. Подключаемся 
$conn = mysqli_connect($host, $user, $pass, $db);

// Проверка подключения
if (!$conn) {
    die("Ошибка подключения: " . mysqli_connect_error());
}

// 4. Составляем запрос
$sql = "INSERT INTO lab2 (user_name, email, age, birthdate, phone, date) 
        VALUES ('$username', '$email', $age, '$birthdate', '$phone', '$current_date')";

// 5. Выполняем запрос
if ($conn->query($sql) === TRUE) {
    header('Location: /show_data.php');
    exit; 
} else {
    echo "Ошибка: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>