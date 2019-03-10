const mysql = require("mysql");
const inquirer = require("inquirer");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "12345678",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    start();
});

function start() {
    // displayProducts(); 
    placeOrder();
}

function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
    });
}

function placeOrder() {
    connection.query("SELECT * FROM products", function (err, results) {
        if (err) throw err;

        inquirer.prompt([{
                name: "item",
                type: "rawlist",
                choices: function () {
                    let productArray = [];
                    for (let i = 0; i < results.length; i++) {
                        productArray.push(results[i].product_name);
                    }
                    return productArray;
                },
                message: "What product id would you like to purchase?"
            },
            {
                name: "quantity",
                type: "input",
                message: "How many would you like to purchase?"
            }
        ]).then(function (answer) {
            let product;

            for (let i = 0; i < results.length; i++) {
                if (results[i].product_name === answer.item) {
                    product = results[i];
                }
                console.log(product.product_name);
                console.log(product.item_id);
                console.log(product.stock_quantity);
            }
            if (product.stock_quantity < parseInt(answer.quantity)) {
                console.log("Product Quantity " + product.stock_quantity);
                console.log("Amount Requested " + answer.quantity);
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [{
                            stock_quantity: answer.quantity
                        },
                        {
                            item_id: product.item_id
                        }
                    ],
                    function (error) {
                        if (error) throw err;
                        console.log("Successfully ordered your product!");
                        start();
                    }
                );
            } else {
                console.log("Quantity too low to place order");
                // displayProducts();
                // start(); 
                connection.end();

            }
        });
    });
}