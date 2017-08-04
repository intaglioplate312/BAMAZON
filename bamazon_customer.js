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




//tooBuy ?
//inquirer
//prompt 
//question = buy book?
//type
// answer (no, yes)
// if or else
// console thank you goodby

//purchase
//inquirer prompt
//id of purchase 
//quantity {
// go to dabase == stock_qty compare purchase quanity with existing quantity
//customerChoiceIDd 
//customerChoiceQuanity
//SELECT stock_qty FROM products
//Where item_id  = customerChoice
// item_id ==< Customer Choice {
// finalTranasction(customerChoiceID, CustomerChoiceQuantiy);

// Final Transaction (argument1, argument2)
//function
// SELECT price from prodcuts
// where item_id = argument1;
//console.log (price * argument2)

//UPDATE products
//SET stock_qty = stock_qty-argument2
//WHERE item id = argument1;

// Too Buy ();


//connection.end();

//bamazon_customer.js