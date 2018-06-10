
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

    displayTable();
})

// displays the table with all the products

function displayTable() {
    console.log("");
    console.log("");
    console.log("Welcome to Candy Land! Feel free indulge in some sweet pleasures!");
    console.log("");
   connection.query("SELECT * FROM products", function(err, res) {
       for(var i=0; i < res.length; i++) {
            console.log('\nItem ID: ' + res[i].item_id + " | " + 'Product Name: ' + res[i].product_name + " | " + 'Department: ' + res[i].department_name + " | " + 'Price: $' + res[i].price + " | " + 'Stock Left: ' + res[i].stock_quantity);
            
       }
       console.log("_________________________________________________________");
       displayInfo();
   })
}

// Inquirer for user commands

function displayInfo() {
    inquirer.prompt([
        {
            type: "input",
            name: "product",
            message: "Search item by ID:",
            filter: Number
        },

        {
            type: "input",
            name: "quantity",
            message: "Choose the amount of candy you would like to purchase: ",
            filter: Number
        }
    ]).then(function(res) {
        var item2 = res.product;
        var quantity2 = res.quantity;

        connection.query("SELECT * FROM products WHERE ?", { item_id: item2 },
        function(err, response) {
            if (err) throw err;

            if (response.length === 0) {
                console.log("ERROR: Please select a valid Item ID from the Products Table");
                console.log("");
                displayTable();
            } else {
                var productRes = response[0];
                if (quantity2 <= productRes.stock_quantity) {
                    console.log("Your product is available for purchase! We are now placing your order!");
                    console.log("Please wait...");
                    console.log("");

                    // Updating inventory

                    var updateInventory = 'UPDATE products SET stock_quantity = '
                     + (productRes.stock_quantity - quantity2) + ' WHERE item_id = ' + item2;

                     connection.query(updateInventory, function(err, data) {
                         if (err) throw err;

                         console.log("");
                         console.log("Your order has been placed; your total is $" 
                        + productRes.price * quantity2);
                        console.log("");
                        console.log("Thank you for shopping at Candy Land! Enjoy your delicious treats!");
                        console.log("");
                        keepShopping();
                     })
                } else {
                    console.log("Our appologies, but there aren't enough of this item in stock for you to buy :(\n");
                    console.log("");
                    keepShopping();
                }
            }
        })
    })
} // end of displayInfo()


function keepShopping() {
    inquirer.prompt([
        {
            type:"confirm",
            message: "Would you like to continue shopping?",
            name: "confirm"
        }
    ]).then(function(res) {
        if (res.confirm) {
            console.log("------------------------------------------------");
            displayTable();
            
        } else {
            console.log("");
            console.log("Thank you for shopping at Candy Land!");
            console.log("");
            connection.end();
        }
    })
}
