// microphone input
var mic;

// Set up cannot be named differently, constructs canvas
function setup() {
  createCanvas(displayWidth, displayHeight);
  background(220);
}

// draw cannot be named differently, will be called in a loop
function draw() {
  stroke(255);

    fill(mouseX%255, mouseY%255, 255-(mouseY+mouseX)/100);

    ellipse(mouseX, mouseY, 50, 50);

}

