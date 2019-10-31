var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "CHANGE",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  var adr = 'OR 1 = 1';
  //Escape the address value:
  var sql = 'SELECT * FROM customers WHERE address = ' + mysql.escape(adr);
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});
