let position;
let velocity;
let acceleration;
let mouse;

function setup() {
  createCanvas(400, 400);
  noCursor();

  position = createVector(width / 2, height / 2);
  velocity = createVector();
  acceleration = createVector();

  // Create a mouse vector
  mouse = createVector();
}

function draw() {
  background(80);

  // Set mouse vector to mouseX, mouseY
  mouse.set(mouseX, mouseY);

  // Calculate the vector pointing from 'position' to the mouse
  let mouseVector = p5.Vector.sub(mouse, position);

  // Set the magnitude to something smaller than '1'
  mouseVector.normalize().mult(0.2);

  // Set acceleration to our updated mouse vector
  acceleration.set(mouseVector);

  velocity.add(acceleration);
  velocity.limit(8);
  position.add(velocity);

  // Draw a paddle at mouseX, mouseY
  paddle(mouse.x, mouse.y, 60); // You can adjust the size as needed

  // Draw a line from mouseX, mouseY to the position vector
  stroke(0);


  noStroke();
  ellipse(position.x, position.y, 20);
}

// Here's the function to draw a paddle
function paddle(x, y, size) {
  push();
  rectMode(CENTER);
  noStroke();
  fill(220, 200, 180);
  rect(x, y + size / 2, size / 3.5, size / 1.5, size / 10);
  stroke(220, 200, 180);
  strokeWeight(size / 20);
  fill(200, 100, 100);
  rect(x, y, size, size, size / 2, size / 2, size / 4, size / 4);
  pop();
}
