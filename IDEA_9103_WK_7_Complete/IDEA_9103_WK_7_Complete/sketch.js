//This is global variable to hold our image
let logoImage;
//two variables to hold the width and height of the image
let logoWidth, logoHeight;

//We will use the preload function, this runs before anything else and it blocks activity until all assets are done loading
function preload() {
  //We need to load the image from disk 
  logoImage = loadImage("assets/picture1.png"); 
}

function setup() {
  createCanvas(800, 600);
  // Set the image dimensions
  logoWidth = 100;
  logoHeight = 60;
}

function draw() {
  //set the background to blue
  background(0, 0, 255);
  //draw the image in the center of the canvas, we will offset the image by half of its width and height
  image(logoImage, width / 2 - (logoWidth/2), height / 2 - (logoHeight/2), logoWidth, logoHeight);

}