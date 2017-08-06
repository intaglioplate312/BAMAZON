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
    //console.log("you are connected");
});
//Getting data from db
connection.query('SELECT * FROM products', function(err, rows) {
    if (err) {
        return callback(err);
    } else {
        //book list formatting
        console.log("\nID \tNAME\t\t\t\t\t\t PRICE");
        for (var i = 0; i < rows.length; i++) {
            console.log(rows[i].item_id + '\t' + rows[i].product_name + '\t$ ' + rows[i].price + '\n');
            // Poormina can I align on decimal with \t unable to find google answer
        }
    }
});

//question user do they want to buy book?
inquirer.prompt([{
        type: "list",
        name: "option",
        message: "Would you like to buy a book?",
        // answer (no, yes)
        choices: [
            "Yes. I would",
            "No Thanks, I have enough to read",
        ]
    }]).then(function(user) {
            //if no end program
            if (user.option === 'No Thanks, I have enough to read') {
                console.log("Thank you have a nice day");
            } else {
                // if yes ask ID and Quanity
                inquirer.prompt([{
                        type: "input",
                        name: "customerChoiceID",
                        message: "Please enter the ID number of the product you would like to buy?",
                    },
                    {
                        type: "input",
                        name: "CustomerChoiceQuantiy",
                        message: "How many units would you like to buy?"
                    },
                ]).then(function(user) {
                        console.log("user.customerChoiceID, user.CustomerChoiceQuantiy);

                            // go to db == stock_qty compare purchase quantity with existing quantity
                            //customerChoiceIDd 
                            //customerChoiceQuanity
                        });
                };
            });


        // //         //purchase
        // //         //inquirer prompt
        // inquirer.prompt([{
        //     type: "input",
        //     name: "customerChoiceID",
        //     message: "Please enter the ID number of the product you would like to buy?",
        // },
        // {
        //     type: "input",
        //     name: "CustomerChoiceQuantiy",
        //     message: "How many units would you like to buy?"
        // },
        // ]).then

        //id of purchase 
        //quantity {
        // go to db == stock_qty compare purchase quantity with existing quantity
        //customerChoiceIDd 
        //customerChoiceQuanity
        // });


        // };



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