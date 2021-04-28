<? 
    $servername = "localhost";
    $username = "root";
    $password = "root";
    $base = "magazine";
    $mysqli = new mysqli($servername, $username, $password, $base);
    if ($connect->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
    echo "Connected successfully";
?>