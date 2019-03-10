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
    menuOptions();
});

function menuOptions() {
    inquirer
        .prompt({
            name: "menu",
            type: "list",
            message: " What would you like to do today? ",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        })
        .then(function (answer) {
            if (answer.menu === "View Products for Sale") {
                viewProducts();
            } else if (answer.menu === "View Low Inventory") {
                lowInventory();
            } else if (answer.menu === "Add to Inventory") {
                addInventory();
            } else if (answer.menu === "Add New Product") {
                newProduct();
            } else {
                console.log("No option selected");
                connection.end();
            }
            menuOptions();
        });
}

function viewProducts() {
    let query = "SELECT * FROM products";

    connection.query(query, function (err, res) {
        if (err) throw err;

        for (let i = 0; i < res.length; i++) {
            console.log("The Current Inventory is: \n Item ID = " + res[i].item_id + '\n Product Name: ' + res[i].product_name + '\n Price: ' + res[i].price + '\n Available Quantity: ' + res[i].stock_quantity + '\n ------------------------------------------------------------------------------------------');
        }
        menuOptions();
    });

}
//Need to figure out how to locate the exact item from the list
function lowInventory() {
    let query = "SELECT stock_quantity FROM products GROUP BY stock_quantity HAVING count(*) < 5;";

    connection.query(query, function (err, res) {
        if (err) throw err;
        
        console.log(res);

        for (let i = 0; i < res.length; i++) {
            console.log(res[i].product_name);
        }
    });
}

function addInventory() {

}

function newProduct() {

}