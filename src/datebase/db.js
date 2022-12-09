module.exports = {
  getProducts: function getProducts(connection) {
    const products = `SELECT * FROM product`;
    connection.query(products, (err, result) => {
      if (err) {
        console.log('Ошибка: ' + err.message);
      } else {
        return result;
      }
    });
  }
}
