var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "CHANGE",
  database: "mydb"
});
//create product table with id and name
con.connect(function(err) {
  if (err) throw err;
  var sql = "SELECT customers.name AS customer, products.name AS favorite FROM customers JOIN products ON customers.favorite_product = products.id";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
