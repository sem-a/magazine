const myDateBase = require('mysql2');

module.exports = {
  connect: () => {
    const connection = myDateBase.createConnection({
      host: 'localhost',
      user: 'root',
      database: 'magazin',
      password: '',
    });
    return connection
  },

  end: (connection) => {
    connection.end((err) => {
      if (err) {
        return console.log('Ошибка: ' + err.message);
      } else {
        console.log('Соединение закрыто');
      }
    })
  }
}
