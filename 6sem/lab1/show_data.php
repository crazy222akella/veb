<?php
    $file_name = "lab1_Troshkin.txt";
    $file = fopen($file_name, "r");
    $header = "Сохраненные данные";
    require_once "blocks/header.php";
    $content = fread($file, filesize($file_name));
    echo "<pre>". $content . "</pre>";
    fclose($file);
?>
    
    
<script src="https://code.jquery.com/jquery-3.7.1.min.js"></script>
<!-- <script src="script.js"></script> -->
</body>
</html>
