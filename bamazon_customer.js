var inquirer = require('inquirer');
var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bamazondb'
});

// connect to bamazon database
connection.connect(function(err) {

    if (err) throw err;
    console.log('connected as id ' + connection.threadId);
});
order();

function order() {
    // display all of the items that are for sale: IDs, names, and price
    connection.query('SELECT * FROM products', function(err, rows) {
        if (err) throw err;
        //book list formatting
        console.log("Welcome to Helen's idosynratic Book Store");
        console.log("\nID \tNAME\t\t\t\t\t\t PRICE");
        for (var i = 0; i < rows.length; i++) {
            console.log(rows[i].item_id + '\t' + rows[i].product_name + '\t$ ' + rows[i].price + '\n');
            // Poormina can I align on decimal with \t unable to find google answer
        };
    });

    // prompt user to ask them the ID of the product they would like to buy

    inquirer.prompt([{
        type: "list",
        name: "option",
        message: "Would you like to buy a book?",
        // answer (no, yes)
        choices: [
            "Yes. I would",
            "No Thanks, I have enough to read",
        ]
    }]).then(function(answer) {
        //if no end program
        if (answer.option === 'No Thanks, I have enough to read') {
            console.log("Thank you have a nice day");


        } else {
            // if yes ask item id of book = customerChoiceID
            inquirer.prompt([{
                    type: "input",
                    name: "id",
                    message: "Please enter the ID number of the product you would like to buy?"
                        //add validation if time allows
                        // yes ask number of copies wanted= customerChoiceQuantiy
                },
                {
                    type: "input",
                    name: "amount",
                    message: "How many books would you like to buy?"
                        //add validation if time allows
                }
            ]).then(function(answers) {

                connection.query('SELECT * FROM Products WHERE item_id = ?', [answers.id], function(err, res) {
                    if (err) throw err;

                    // Check stock
                    if (answers.amount > res[0].stock_qty) {
                        console.log("Sorry that item is currently out of stock" + '\n' + '\n');

                        order();
                    }
                    // total amount due:
                    else {
                        var total = answers.amount * res[0].price
                        console.log("Your total is " + total + "Thank you for your business!");
                        //updates stock
                        connection.query('UPDATE Products SET stock_qty = "' (res[0].stock_qty - answers.amount) + '" WHERE product_name = "' + answers.item_id + '"');
                    }
                })
            });
        }
    })
};

// bamazon_customer.js