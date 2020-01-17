var inquirer = require("inquirer");
var mysql = require("mysql");

var con = mysql.createConnection({
    port: 8889,
    user: "root",
    password: "root",
    database: "webstore"
});

con.connect(function(err, res){
    if (err) throw err;
    console.log ("connected!");
    start();
})

function start(){
    inquirer.prompt(
        {
            type: "list",
            name: "main",
            message: "Hello Sir",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        }
    ).then(res=>{
        console.log(res);
        switch (res.main) {
            case "View Products for Sale":
                viewProducts();    
                break;
            case "View Low Inventory":
                viewProducts(true);    
                break;
            case "Add to Inventory":    
                break;
            case "Add New Product": 
                addProduct();   
                break;
        
            default:
                break;
        }
    })
}

function viewProducts(low){
    var query = "SELECT * FROM products"
    if(low) query += " WHERE stock_quantity < 5"
    con.query(query, function(err, res){
        if (err) throw err;
        console.table(res);
        console.log(res)
        endPrompt();
    })
}

function addProduct(){
    inquirer.prompt([
        {
            type: "input",
            name: "product_name",
        },
        {
            type: "input",
            name: "department_name",
        },
        {
            type: "number",
            name: "price"
        },
        {
            type: "number",
            name: "stock_quantity"
        }
    ]).then(function(res){
        //if (err) throw err;
        console.log(res);
        con.query("INSERT INTO products SET ?", res, function(err, res){
            console.log("added!");
        })
    })
}

function addInventory(){
    inquirer.prompt([
        {
            name: "product_name",
            type: "input",
        },
        {
            name: "amount",
            type: "number",
        }
    ]).then(res=>{

    })
}

function endPrompt(){
    inquirer.prompt({
        message: "Continue?",
        type: "confirm",
        name: "continue"
    }).then(res=>{
        if(res.continue) start();
        else con.end();
    })
}