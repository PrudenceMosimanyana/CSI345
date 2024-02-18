var mysql = require('mysql');

var con = mysql.createConnection({
  host: "10.0.19.2",
  user: "mos03799",
  password: "mos03799"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a database named "mydb":*/
  con.query("CREATE DATABASE mydb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    /*Create a table named "Employees":*/
    var sql = "CREATE TABLE employees (name VARCHAR(255), address VARCHAR(255), email VARCHAR(255), password VARCHAR(255), employeeID INYEGER(8))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    /*Create a table named "adverts":*/
    var sql = "CREATE TABLE adverts (advertID INTEGER(8), name VARCHAR(255), description VARCHAR(255) createdDate DATE, status VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    /*Create a table named "tags":*/
    var sql = "CREATE TABLE tag (tagID INTEGER(10), tagName VARCHAR(255))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    /*Create a table named "advertTags":*/
    var sql = "CREATE TABLE adverttags (advertTagID INTEGER(10), tagID INTEGER(10), advertID INTEGER(8))";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table created");
    });
  });

