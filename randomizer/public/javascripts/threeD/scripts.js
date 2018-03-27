function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  img = loadImage('images/threeD/test.png');
}

function draw() {
  background(255);
  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;
//  ambientLight(30);
  ambientLight(100);
  pointLight(255, 255,255, locX, locY, 50);
  noStroke();

if (mouseIsPressed) {
//  rotateX(mouseX*0.1);
  rotateY(mouseY*0.1);  
//    translate(0,0,mouseY*0.1);
  specularMaterial(120,255,255);
}else{
//  specularMaterial(20);  
    specularMaterial(50,170,255); 
}

  createBox(72,400,94,0);
  createSphere(41.5,100,420);
  createBox(452,30,100,480);
  createBox(225,40,171,309);
  createCone(27,63,400,400,true);  
  createBox(36,249,400,150);
  createSphere(85.5,237,180);
  createBox(238,145,214,0);  
  //rotated --0.63!
  createBox(450,24,551,425,-0.62);
  //rotated!
  createCone(135,207,504,100,false);
  //rotated 0.6!
  createBox(215,34,438,70,0.6);
  createSphere(23.5,470,0);
  createSphere(41,570,0);
  createCone(201,469,730,0,true);
  //rotated -0.55!
  createBox(40,267,935,143,-0.55);
  createSphere(58,1010,266);
  createBox(150,150,1000,0);
  createBox(76,102,1075,150)
}

function offsetWidth(num){
  return (-windowWidth/2)+(num/2);
}

function offsetHeight(num){
  return (windowHeight/2)-(num/2)-25;  
}

function createBox(width,height,x,y,rotation){
  var depth = width;
  push();
    translate(offsetWidth(width)+x,offsetHeight(height)-y);
    if(rotation!=undefined){
      rotateZ(rotation);
    }
    box(width,height,depth);
  pop();
}

function createSphere(radius,x,y){
  push();
    translate(offsetWidth(radius)+x,offsetHeight(radius)-y);
    sphere(radius);
  pop();  
}

function createCone(radius,height,x,y,rotation){
  push();
    translate(offsetWidth(radius)+x,offsetHeight(height)-y);
    if(rotation==true){
      rotateX(3);
    }
    cone(radius,height);
  pop();    

}

//an array of objects with names
//when you click on one it's selected
//idk if it changes color, probably yes for development
//it can spin in place when selected
//normalize z-axis