var mysql = require("mysql");
var inquirer = require("inquirer");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    port: 8889,
    database: "webstore"
});

con.connect(function(err){
    console.log("connected!")
    go();
})

function numberValidate(input){
    return typeof input === "number";
}

function go(){
    inquirer.prompt([
        {
            type: "number",
            name: "item_id",
            message: "Enter the ID of the thing you're finna buy",
            validate: function(input){
                return typeof +input === "number";
            }
        },
        {
            type: "number",
            name: "amount",
            message: "Enter the amount of the thing you're finna buy",
            validate: function(input){
                return typeof +input === "number";
            }
        }
    ]).then(function(results){
        console.log(results);
        checkStock(results.item_id, results.amount);

        var id = results.item_id;
        var amount = results.amount;

        // var query = "SELECT stock_quantity, price FROM products WHERE item_id = " + id;
        // con.query(query, function(err, results){
        //     if (err) throw err;
        //     console.log(results)
        // })
    })
}


// con.query("SELECT * FROM products", function(err, results){
//     if (err) throw err;
//     console.table(results)
// })

function checkStock(id, amount){
    var query = "SELECT stock_quantity, price FROM products WHERE item_id = " + id;
    con.query(query, function(err, results){
        if (err) throw err;
        var stock = results[0].stock_quantity;
        var price = results[0].price;
        if(amount <= stock) buy(id, amount, stock, price)
        else console.log("Insufficient Quantity!");
    })
}

function buy(id, amount, stock, price){
    var query = `UPDATE products SET stock_quantity = ${stock-amount} WHERE item_id = ${id}`;
    con.query(query, function(err, results){
        if (err) throw err;
        console.log("$" + (amount * price))
    })
}