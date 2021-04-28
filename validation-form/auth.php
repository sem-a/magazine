<?
    $login = filter_var(trim($_POST['login']), FILTER_SANITIZE_STRING);
        $password = filter_var(trim($_POST['password']), FILTER_SANITIZE_STRING);
        $pass = md5($pass."fsdfsd454");
        $mysql = new mysqli('localhost', 'root', 'root', 'magazine');
        $result = $mysql->query("SELECT * FROM `users` WHERE `login` = '$login' AND `password` = '$password'");
        $user = $result->fetch_assoc();
        if (count($user) == 0) {
            echo "Такой пользователь не найден";
            exit();
        }
        setcookie('user', $user['name'], time() + 3600, "/");
        $mysql->close();
        header('Location: /');
        exit();
?>