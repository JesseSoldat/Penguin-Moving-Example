//Constructor
//-------------------------------------------------------------
var Prey = function(health) {
  this.health = health;
  
  this.direction = "down";

  this.hit = function() {
    var hitPoints = 10;
    return this.health = this.health - hitPoints;
  };
};  // End of Prey Constructor
var penguin = new Prey(100);
// console.dir(penguin);

//DOM ELEMENTS
//------------------------------------------------------------
var box = $('#box');
var $pen = $('#penguin');
var $start = $('#start');
var boxWidth = $(box).width();  // Horizontal Box 1000
var penRightBorder = boxWidth - 75;  //Penguin Right Border 925
// console.log(penRightBorder);
var penLeftBorder = 0;  //Penguin Left Border

var latDirection = 'right'; //Penguin goes right first 

//Find the X/Y Cordinates
//---------------------------------------------------------------
// var $offset = $pen.offset(); //Gives current position of an element relative to the document
// console.log($offset); 
var $position = $pen.position(); //Gives the current position of its PARENT 
// console.log($position);
var pY = $position.top; //Give the current TOP position of its PARENT
// console.log('Top: '+ pY);
var pX = $position.left; //Give the current LEFT position of its PARENT
// console.log('Left: '+ pX);


// Functions
//-------------------------------------------------------------
// setInterval(function(){
//       // method to be executed;
//     },5000);

// Choose the Direction to Move
//-------------------------------------------------------------
function animatePenguin(){  //User click the button to start this function 
  if(latDirection === 'right'){ //Checks the Penguins Direction
    animateRight(); // Direction is Right
  } else {
    animateLeft(); // Direction is Left
  }
};

// Move RIGHT
//-------------------------------------------------------------
function animateRight(){  //Move Right
  $pen.animate({
    left: "+=50",
    // top: "+=20"
  }, 500, function(){

    var $position = $pen.position(); // Get current position each time the function is run
    // var pY = $position.top;
    // console.log('Top: '+ pY);
    var pX = $position.left;  
    console.log('Left: '+ pX);

      if((pY >= 368) || (pX >= penRightBorder)){ // If the penguins Left Position is greater than or equal to 925 do the following
      reverse('left'); // Call the reverse function with a parameter of left
      console.log('I have returned'); // After reverse function RETURNS    
      latDirection = 'left'; // Set Penguins direction to LEFT so that the next time animatePenguin() is called the Penguin will use the animateLeft()  
      // console.log(latDirection);
      } // End of If
  }); // END of anonymous function 
} // END of animateRight()

// Move LEFT
//-------------------------------------
  function animateLeft(){ // Move Left
  $pen.animate({
    left: "-=50", 
    // top: "-=20"
  }, 500, function(){

    var $position = $pen.offset();
    // var pY = $position.top;
    // console.log('Top: '+ pY);
    var pX = $position.left;
    console.log('Left: '+ pX);
      // I removed the pY condition for now because we aren't yet worried about a valid Y movement,
    // but that needs to be added back.
    if((pX <= penLeftBorder)){
          reverse('right');
      console.log('I have returned');    
      latDirection = 'right';
      console.log(latDirection);
      } //END If
  }); // END of anonymous function 
} //END of animateLeft()

// REVERSE the direction ONE time before returning to the function that called ME
//-----------------------------------------------------------
function reverse(direction){ 
  if(direction === 'left'){ //Checks the Penguins direction if Left was given as a parameter then move -50
  console.log("Reverse Me LEFT"); 
    $pen.animate({
      left: "-=50"
    }, 500);
  } else {  // If Right was given as a parameter then go +50
  console.log("Reverse Me RIGHT"); 
    $pen.animate({
      left: "+=50"
    }, 500);
  }
}
window.onload = function() { // User can not start click until everything is loaded
  // console.log('Ready or Not!');

$start.on('click', function(){ // User clicks to start the game
  // console.log('pushed button');
  animatePenguin(); // Calls a function that will either call the animateRight or animateLeft function
  
// take away health
$pen.on('click', function(){  // When user clicks on the Penguin
  console.log('clicked');
  penguin.hit(); // A function in the Penguin Object that subtracts a number from 100 (Penguin's total health)
  // console.log(penguin.health);
})
});

// Checks the Position where the user CLICKED in the BOX 
box.click(function(e){
    var mouseX = e.pageX - this.offsetLeft; // HORIZONTAL POSITION of this (what was clicked on)
    // console.log("Mouse Horizontal: " + mouseX);
    var mouseY = e.pageY - this.offsetTop; // VERTICAL POSITION of this (what was clicked on)
    // console.log("Mouse Vertical: " + mouseY);

    // console.log("Penguin Horizontal: " + pX);
    // console.log("Penguin Vertical : " + pY);

    // Get the Penguin's Left and Right Borders
    var penguinLeft = pX + 15;
    var penguinRight = pX + 75;
    // console.log("Right Border: " + penguinRight);
    // console.log("Left Border: " + penguinLeft);
    // Get the Penguin's Top and Bottom Borders
    var penguinTop =  pY + 90; //BOTTOM
    var penguinBottom = pY - 0; //TOP
    // console.log("Top Border: " + penguinTop);
    // console.log("Bottom Border: " + penguinBottom);
    // Check to see if the user clicked within the Penguin's Left and Right borders
    if (mouseX > penguinLeft && mouseX < penguinRight && mouseY < penguinTop && mouseY > penguinBottom){
      console.log("You clicked ME!");
    }
    
  



});

} // END of ONLOAD