var topics = ["Frasier Crane", "Niles Crane", "Daphne Moon",
"The Dog From Frasier"];

topics.forEach(char=>addButton(char));

$("#addButtonButton").click(event=>{
    event.preventDefault();
    var newbie = $("#addButtonInput").val().trim();
    if(newbie) addButton(newbie);
})

function addButton(name){
    var button = $("<button></button>").text(name);
    button.addClass("searchButton");
    button.attr("id",name.split(" ").join(""))
    $("#buttonBar").append(button);
}

$("button#FrasierCrane").click(function(event){
    //event.preventDefault();
    console.log($(this))
    $(this).text("poopoo")
})

console.log($("#FrasierCrane"))

// $.ajax({
//     method: get,
//     url: 
// });

function loadGifs(keyword){
    $.ajax({
    method: "GET",
    url: ""
    })
    .then(function(results){

    });
}