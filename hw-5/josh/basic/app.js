$("#results").hide();
$("#quiz").hide();

var timeLeft;
var inter;
var answers = ["female", "female"]
var correct = 0;
var incorrect = 0;
var unanswered = 0;

console.log($("#questionOne"))

$("#start").click(function(){
    $(this).hide();
    start();
})

function start(){
    $("#quiz").show();
    timeLeft = 10
    inter = setInterval(countdown,500)
}

function countdown(){
    if(timeLeft > 0){
        $("#timer").text(--timeLeft);
    }
    else{
        clearInterval(inter);
        checkAnswers();
        $("#quiz").hide();
        $("#results").show();
        console.log($("input[name=q1]:checked").val())
    }
}

function checkAnswers(){
    for(var i = 0; i < answers.length; i++){
        var query = `input[name=q${i+1}]:checked`
        if(answers[i]===$(query).val()){
            correct++;
        }
    }
    console.log(correct)
    $("#correct").text(correct);
    $("#incorrect").text(incorrect);
    $("#unanswered").text(unanswered);
}