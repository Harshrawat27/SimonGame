var colorOfAllBox = ["red", "blue", "green", "yellow"];

var userInput = [];
var computerPattern = [];

var started = false;
var level = 0;

$(document).keypress(function(){
    if (!started) {
    generatePattern();
    started = true;
    }
});



$(".btn").click(function () {

    var getid = $(this).attr("id");
    userInput.push(getid);

    musicEffect(getid);
    Animation(getid);

    checkPattern(userInput.length-1);
});

function checkPattern(currentLevel){
    if(userInput[currentLevel] === computerPattern[currentLevel]){
        if(userInput.length === computerPattern.length){
            setTimeout(function(){
                generatePattern();
            },1000);   
        }
    }
    else{
        musicEffect("wrong");
        $("body").addClass("game-over");
        $("#level-title").text("Game-over, press any key to start again");

        setTimeout(function(){
            $("body").removeClass("game-over");
        },200);

        startOver();
    }
};


function generatePattern(){
    userInput = [];
    level++;
    $("#level-title").text("Level " + level);
    var randomNumberGenerator = Math.floor(Math.random() * 4);
    var randomColorGenerator = colorOfAllBox[randomNumberGenerator];
    computerPattern.push(randomColorGenerator);

    $("#" + randomColorGenerator).fadeOut(100).fadeIn(100);
    musicEffect(randomColorGenerator);
};


function musicEffect(music){
    var audio = new Audio("sounds/" + music + ".mp3");
    audio.play();
};

function Animation(effect){
  
    $("." + effect).addClass("pressed");

    setTimeout(function() {
        $(".btn").removeClass("pressed");
    }, 100);
   
};

function startOver(){
    level = 0;
    computerPattern = [];
    started = false;
}