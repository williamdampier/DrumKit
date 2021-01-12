// Detecting Clicks

for (var i=0; i<document.querySelectorAll(".drum").length; i++)
{
  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);
}







// Add Event Listener - Reaction to click or pressed button
function handleClick()
{
  var keyPressed = this.innerHTML;
  makeSound(keyPressed);
buttonAnimation(keyPressed);


}

// Add Event Listener Detecting button pressed
document.addEventListener("keydown", function(event)
{
makeSound(event.key);
buttonAnimation(event.key);

});

//Playing sounds
function makeSound(key)

{
  switch (key) {
    case "w":
      var audiow = new Audio('sounds/crash.mp3');
      audiow.play();

      break;

    case "a":
      var audioa = new Audio('sounds/kick-bass.mp3');
      audioa.play();
      break;

    case "s":
    var audios = new Audio('sounds/snare.mp3');
    audios.play();
    break;

    case "d":
    var audiod = new Audio('sounds/tom-1.mp3');
    audiod.play();
    break;

    case "j":
    var audioj = new Audio('sounds/tom-2.mp3');
    audioj.play();
    break;

    case "k":
    var audiok = new Audio('sounds/tom-3.mp3');
    audiok.play();
    break;

    case "l":
    var audiol = new Audio('sounds/tom-4.mp3');
    audiol.play();

      break;
    default:

  }
}

// Making Button Animation

function buttonAnimation(currentKey)
{
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout (function()
{
  activeButton.classList.remove("pressed")
}, 100);


}
