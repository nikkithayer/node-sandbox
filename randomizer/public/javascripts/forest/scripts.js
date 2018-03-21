$(document).ready(function(){

var tree = "🌲";
var man = "🏃🏻";
var tiger = "🐅";
var moveCount = 0;
var forest = {
  elements: [],
  width: 10,
  height: 6
}
var position = calcSeed(forest.width,forest.height);

buildForest();

$( window ).keydown(function( event ) {
  if ( event.which == 37 ) {
   event.preventDefault();
   position.x > 0 && position.x--;
  }
  if ( event.which == 38 ) {
   event.preventDefault();
   position.y > 0 && position.y--;
  }
  if ( event.which == 39 ) {
   event.preventDefault();
   position.x < forest.width-1 && position.x++;
  }
  if ( event.which == 40 ) {
   event.preventDefault();
   position.y < forest.height-1 && position.y++;
  }
  if ( event.which == 66 ) {
   explode();
  }
 buildForest(position);
 position.count++;
 console.log(position.count);
});

function explode(){
  alert("boom");
}

function buildForest(){
  $("#trees").html("");
  var trees = [];
  for(i=0; i<forest.height; i++){
    for(j=0; j<forest.width; j++){
      var newForest = tree;
      if(position.x == j && position.y == i){
        newForest = man;
      }
      trees.push(tree);
      $("#trees").append(newForest);
    }
    forest.elements.push(trees);
    trees = [];
    $("#trees").append("<BR>");
  }  
}
  
function calcSeed(width,height){
  var seed = {
    x: Math.floor(Math.random()*width),
    y: Math.floor(Math.random()*height),
    count: 0
  }
  return seed;
}  
  
  
});