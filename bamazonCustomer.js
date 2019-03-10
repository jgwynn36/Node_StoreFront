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

function displayProducts() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        console.log(res);
    });
}

function start() {
    displayProducts();

    inquirer.prompt({
        name: "question1",
        type: "input",
        message: "What product id would you like to purchase? "
    }, {
        name: "quantity",
        type: "input",
        message: "How many would you like to purchase?"
    })


}