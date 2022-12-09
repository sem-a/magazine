const myDateBase = require('mysql2');

const connection = myDateBase.createConnection({
  host: "	vh332.timeweb.ru",
  user: "cx05095",
  database: "cx05095_magazin",
  password: "cx05095Magazin"
});

function connect() {
  connection.connect(function(err){
    if (err) {
      return console.error("Ошибка: " + err.message);
    }
    else{
      console.log("Подключение к серверу MySQL успешно установлено");
    }
  });
}

export default connect;


