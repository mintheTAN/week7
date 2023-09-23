let img;
let imgMask;

function preload() {
 
  img = loadImage('assets/Edvard_Munch_The_Scream.jpeg');
  imgMask = loadImage('assets/scream.png');
}

function setup() {
  createCanvas(720, 400);

  img.mask(imgMask);
  imageMode(CENTER);
}

function draw() {
  background(0, 102, 153);
  image(img, width / 2, height / 2);
  image(img, mouseX, mouseY);
}