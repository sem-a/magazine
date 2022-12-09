const myDateBase = require('mysql2');

const connection = myDateBase.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'magazin',
  password: '',
});

connection.connect(function (err) {
  if (err) {
    return console.error('Ошибка: ' + err.message);
  } else {
    console.log('Подключение к серверу MySQL успешно установлено');
  }
});



connection.end((err) => {
  if (err) {
    return console.log('Ошибка: ' + err.message);
  } else {
    console.log('Соединение закрыто');
  }
})