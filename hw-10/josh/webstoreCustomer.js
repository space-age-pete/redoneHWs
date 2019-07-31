var mysql = require("mysql");

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

function go(){
    console.log("went")
    con.query("SELECT * FROM products", function(err, results){
        if (err) throw err;
        console.table(results)
    })
}