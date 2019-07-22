var Word = require("./Word");
var inquirer = require("inquirer")

var wordsList = ["shinji", "rei", "asuka", "toji"];
var currentWord = new Word("pineapple")

function runGame(){
    inquirer.prompt({
        type: "input",
        name: "guess",
        message: "guess a letter!",
        validate: (val)=> {return typeof val === "string"}
    })
    .then(answer => {
        currentWord.check(answer.guess)
        console.log("" + currentWord)
        if(currentWord.toString().includes("_")) runGame();
    })
}

currentWord = new Word(wordsList[Math.floor(Math.random() * wordsList.length)])
console.log(`${currentWord}`)
runGame();