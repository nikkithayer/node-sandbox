function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("jump-holder");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  canvas.parent("jump-holder");
//  loadImage('images/jump/jump.png', loadJump);
  noStroke();
}

  var newY = (window.innerHeight/2)*Math.random();
  var newX = (window.innerWidth/2)*Math.random();

function draw() {
  blendMode(NORMAL);
  background(255);
  fill(0,212,232);
  
  if (mouseIsPressed) {
//    loadImage('images/jump/jump.png', loadJump);
    newY = mouseY;
    newX = mouseX;
  } else {
    if(newY>(windowHeight/2)+1){
      newY = newY-1;
    }else if(newY<(windowHeight/2)-1){
      newY = newY+1;
    }else{
      
    }
  }
 drawWave(newX,newY);  
 drawWave(newX-30,newY+30);  

}

function drawWave(xCoord,yCoord){
  blendMode(MULTIPLY);
  beginShape();
    vertex(0,windowHeight/2);
    bezierVertex(xCoord, (yCoord+windowHeight/2)*0.5, xCoord, (yCoord+windowHeight/2)*0.5, windowWidth, windowHeight/2);
    vertex(windowWidth,windowHeight);
    vertex(0,windowHeight);
  endShape();  
}

function loadJump(img){
  image(img, 0,0);
}
