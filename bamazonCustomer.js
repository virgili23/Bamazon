
require("dotenv").config();
var mysql = require("mysql");
var inquirer = require("inquirer");
var password = process.env.PASSWORD;
var port = 3306;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: password,
    database: "bamazon"
});

connection.connect(function(err) {
    if (err) throw err;

    console.log("You are connected on port: " + port);
})
