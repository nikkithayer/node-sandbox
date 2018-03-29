$(document).ready(function(){

var tree = "🌲";
var man = "🏃🏻";
var tiger = "🐅";
var caterpillar = "🐛";
var dead = "👻";
var moveCount = 0;
var forest = {
  elements: [],
  width: 10,
  height: 6
}
var position = calcSeed(forest.width,forest.height);
var tigerPosition = {};

var narration = ["welcome to the forest","there’s a lot to see here","","","trees, mostly. i wasn’t being completely honest with you when I said there was a lot to see.","look, a caterpillar! i guess there is a lot to see in the forest. i was underselling it before.","hey big guy.","","","really, though, it's mostly trees","oh, and a tiger. should have mentioned that.","anyway it's hungry. it's probably gonna eat you.","sorry about the tiger. really.","...","","okay i said before the tiger was probably gonna eat you? it's definitely gonna eat you.","that's just how it goes sometimes. there's no goal here, btw. sometimes tigers just show up and eat you.","","really, though. sorry about the tiger."];

buildForest();

$( window ).keydown(function( event ) {
  if ( event.which == 37 ) {
   event.preventDefault();
   position.x > 0 && position.x--;
   moveTiger();
   buildForest(position);
  }
  if ( event.which == 38 ) {
   event.preventDefault();
   position.y > 0 && position.y--;
   moveTiger();
   buildForest(position);
  }
  if ( event.which == 39 ) {
   event.preventDefault();
   position.x < forest.width-1 && position.x++;
   moveTiger();
   buildForest(position);
  }
  if ( event.which == 40 ) {
   event.preventDefault();
   position.y < forest.height-1 && position.y++;
   moveTiger();
   buildForest(position);
  }
 position.count == 9 && enterTiger();
});

function moveTiger(){
  if(man == dead){
    tigerPosition.x > position.x ? tigerPosition.x++ : tigerPosition.x--;
    tigerPosition.y > position.y ? tigerPosition.y++ : tigerPosition.y--;     
  }else{
    tigerPosition.x > position.x ? tigerPosition.x-- : tigerPosition.x++;
    tigerPosition.y > position.y ? tigerPosition.y-- : tigerPosition.y++;  
  }
}

function buildForest(){
  if(man == dead){
   $("#narration").html("<a href='forest/heaven'>welcome to heaven</a>");           
  }else{
   $("#narration").text(narration[position.count]);    
  }
   position.count++;
  $("#main").html("");
  var trees = [];
  for(i=0; i<forest.height; i++){
    for(j=0; j<forest.width; j++){
      var newForest = tree;
      if(position.x == j && position.y == i){
        newForest = man;
      }
      if(j == position.x-1 && i == position.y && position.count > 5 && position.count < 8){
        newForest = caterpillar;
      }
      if(tigerPosition.x == j && tigerPosition.y == i){
        if(tigerPosition.x == position.x && tigerPosition.y == position.y){
          man = dead;
          newForest = man;
        }else{
          newForest = tiger;        
        }
      }      
      $("#main").append(newForest);
    }
    forest.elements.push(trees);
    trees = [];
    $("#main").append("<BR>");
  }  
}

function enterTiger(){
  tigerPosition = calcSeed(forest.width, forest.height);
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