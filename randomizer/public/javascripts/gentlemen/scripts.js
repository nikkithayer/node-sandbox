function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
}


function draw() {
  background(0);
  stroke(255);
  strokeWeight(3);
  var m = {x1: 0, y1: windowHeight, x2: 0, y2: windowHeight};
  while(m.x2 < windowWidth){
    line(m.x1, m.y1, m.x2, m.y2);
    m.y1 -= 20;
    m.x2 += 20;
  }
  //if mouse over guy 1
  xOutMan();
  //if mouse over guy 2
  radiateMan();
  //if mouse over guy 3
  repeatMan();
  //if mouse over guy 4
  rattleMan();
  //if mouse over guy 5
  staticMan();
}


function xOutMan(){
  console.log("xOut!!!");
}

function radiateMan(){
  console.log("radiate");
}

function repeatMan(){
  console.log("repeaaat");
}

function rattleMan(){
  console.log("rattleman");
}

function staticMan(){
  console.log("staticman");
}
