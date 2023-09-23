let img;
let imgMask;

function preload() {
  // 加载图像及图像遮罩
  img = loadImage('assets/moonwalk.jpg');
  imgMask = loadImage('assets/mask.png');
}

function setup() {
  createCanvas(720, 400);
  // mask() 函数将图像遮罩覆盖在图像上
  img.mask(imgMask);
  imageMode(CENTER);
}

function draw() {
  background(0, 102, 153);
  image(img, width / 2, height / 2);
  image(img, mouseX, mouseY);
}