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
BuyBooks();

function buyBooks() {
    // display all of the items that are for sale: IDs, names, and price
    connection.query('SELECT * FROM products', function(err, rows) {
        if (err) throw err;
        //book list formatting
        console.log("Welcome to Helen’s Idiosyncratic Book Shop");
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
            // if yes ask item ID (id, ego, super ego) of book = customerChoiceID
            inquirer.prompt([{
                    type: "input",
                    name: "ego",
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
                console.log(answers.ego, answers.amount)
                    //security issue??  
                connection.query('SELECT * FROM Products WHERE item_id = ?', [answers.ego], function(err, res) {
                    if (err) throw err;

                    // Check stock_qty
                    if (answers.amount > res[0].stock_qty) {
                        console.log("Sorry that item is currently out of stock" + '\n' + '\n');

                        buyBooks();
                    }
                    // Price to customer 100% markup

                })
            });
        }
    })
};



//purchase
//inquirer prompt
//id of purchase 
//quantity {
// go to db == stock_qty compare purchase quantity with existing quantity
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