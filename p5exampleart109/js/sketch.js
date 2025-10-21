let canvas;
function setup() {
    canvas = createCanvas(windowWidth, windowHeight)
    canvas.position(0, 0);
    canvas.style("z-index", -2)
   // background(0, 255, 255)
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
   // background(0, 255, 255)
}

function mouseMoved() {
  drawdots(mouseX, mouseY);
  drawdots(mouseX -60, mouseY + 40);

}
function draw() {
 if(mouseX <=200 && mouseY <=200){
   fill(255, 0, 0);
  } else if(mouseX >200 && mouseY <=200){
    fill(0, 100, 200);
  } else if (mouseX <= 200 && mouseY >200){
    fill(0,100,0);} else if (mouseX =>200 && mouseY > 200) {fill(0,0,100);}
  }
function drawdots(_x,_y){
     strokeWeight(0);
   //fill(random(200, 255), random(200, 255), random(200, 255));
    ellipse(_x, _y, 30, 30) 
}