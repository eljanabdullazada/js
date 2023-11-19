//alert("hello");
var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];

function nextSequence() {

    var randomNumber = Math.round(Math.random() * 3);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

    // $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    //3. Use Google/Stackoverflow to figure out how you can use Javascript to play the sound for the button colour selected in step 1.
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
}
