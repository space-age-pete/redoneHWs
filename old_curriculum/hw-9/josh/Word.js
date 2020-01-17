var Letter = require("./Letter.js");

function Word(word){
    this.letters = word.split("").map((let)=>new Letter(let));
    // this.toString = function(){
    //     return this.letters.map((let)=>let.toString()).join(" ")
    // }
    this.check = function(guess){
        this.letters.forEach(let => let.check(guess));
    }
}

Word.prototype.toString = function(){
    return this.letters.map((let)=>let.toString()).join(" ")
}


// var poop = new Word("poop");
// console.log(poop)



module.exports = Word;

