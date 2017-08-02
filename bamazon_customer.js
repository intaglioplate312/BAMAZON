var inquirer = require('inquirer');
var mysql = require('mysql');
var colors = require('colors');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bamazondb'
});

connection.connect(function(err) {
    if (err) {
        console.log(err);
    }
    console.log("you are connected");
});

connection.query('SELECT * FROM products', function(err, rows) {
    if (err) {
        return callback(err);
    }
    console.log("\nID \tNAME\t\t\t\t\t\t PRICE");
    for (var i = 0; i < rows.length; i++) {
        console.log(rows[i].item_id + '\t' + rows[i].product_name + '\t$ ' + rows[i].price + '\n');
        // can I align on decimal with \t
    }
});


connection.end();

//bamazon_customer.js