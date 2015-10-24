//Constructor
var Prey = function(health) {
  this.health = health;
  
  this.direction = "down";

  this.hit = function(num) {
    var hitPoints = num || 10;
    return this.health = this.health - hitPoints;
  };
};
var penguin = new Prey(100);
console.dir(penguin);
//DOM ELEMENTS
var box = $('#box');
var $pen = $('#penguin');

//Find the X/Y Cordinates
var $position = $pen.offset();
var pY = $position.top;
console.log('Top: '+ pY);
var pX = $position.left;
console.log('Left: '+ pX);



//Move Penguin
function animateRight(){
  
  $pen.animate({
    left: "+=100",
    // top: "+=20"
  }, 500, function(){

    var $position = $pen.offset();
    var pY = $position.top;
    console.log('Top: '+ pY);
    var pX = $position.left;
    console.log('Left: '+ pX);

      if((pY >= 368) || (pX >= 1000)){
        console.log("Right");
          animateLeft();
      }
  }); 
} //end of animateRight

//-------------------------------------
  function animateLeft(){
  
  $pen.animate({
    left: "-=100",
    // top: "-=20"
  }, 500, function(){

    var $position = $pen.offset();
    var pY = $position.top;
    console.log('Top: '+ pY);
    var pX = $position.left;
    console.log('Left: '+ pX);
      if((pY >= 0) || (pX >= 0)){
        console.log("Left");
          animateRight();
      }
  }); 
} //end of animateLeft
$pen.on('click', function(){
  animateRight();
});