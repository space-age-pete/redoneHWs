var guessesLeft = 10;
var wins = 0;
var losses = 0;
var guessesSoFar = "";
var letter = "f";

function update(key){
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML = losses;
    document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    document.querySelector("#guessesSoFar").innerHTML = guessesSoFar;
}

document.onkeydown = function(event){
    
    if(event.key === letter){
        wins++;
        guessesLeft = 10;
        guessesSoFar = "";
    } else if(guessesLeft === 1){
        losses++;
        guessesLeft = 10;
        guessesSoFar = "";
    } else {
        guessesSoFar += event.key;
        guessesLeft--;
    }

    update(event.key);
}