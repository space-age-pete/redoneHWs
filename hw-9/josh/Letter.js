function Letter(letter){
    this.letter = letter;
    this.guessed = false;
    // this.toString = function(){
    //     return this.guessed ? this.letter : "_"
    // }
    this.check = function(guess){
        if(this.letter === guess) this.guessed = true;
    }
}

Letter.prototype.toString = function(){
    return this.guessed ? this.letter : "_"
}

// var g = new Letter("g");
// console.log(""+g)

// var what = ""
// what = g;
// console.log(typeof what);

module.exports = Letter;