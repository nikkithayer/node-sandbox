function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  spaceMan = loadImage("images/threeD/spaceman.jpg");
}

function draw() {
  background(0);
  var locX = mouseX - width / 2;
  var locY = mouseY - height / 2;
  // to set the light position,
  // think of the world's coordinate as:
  // -width/2,-height/2 -------- width/2,-height/2
  //                |            |
  //                |     0,0    |
  //                |            |
  // -width/2,height/2--------width/2,height/2
  pointLight(255, locX, locY, 50);
  specularMaterial(255);
  noStroke();
  rotateX(10);
  texture(spaceMan);
  //rotateX(frameCount * 0.01);
  //rotateY(frameCount * 0.01);
  var size = 100;
  box(size);
  for(i=0;i<6;i++){
    translate(100,0,0);
    size = size/1.25;
    box(size);
  }
  size = 100;
  translate(-600,0);
  for(i=0;i<6;i++){
    translate(0,100);
    size = size/1.25;
    box(size);
  }
}