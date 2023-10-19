let song;
let fft; // Declare the FFT variable
let spectralCentroid = 0;
let centroidplot = 0.0;


function preload() {
  // Fill in the URL for your audio asset with forward slashes
  song = loadSound("assets/sample-visualisation.mp3");
}

function setup() {
  cnv = createCanvas(1000, 800);
  // Create a new FFT analysis object
  fft = new p5.FFT();
  // Add the song (sample) into the FFT's input
  song.connect(fft);
  angleMode(DEGREES);
}

function draw() {
  // Give the user a hint on how to interact with the sketch
  if (getAudioContext().state !== 'running') {
    background(220);
    text('assets/sample-visualisation.mp3', 10, 20, width - 20);
    // Early exit of the draw loop
    return;
  }

  background(0);
  stroke(250, 250, 250);


  let spectrum = fft.analyze();
  let spectrumLength = spectrum.length;

  fill(255,0,0,191);
  noStroke();
  rect(0,centroidplot/2,centroidplot*3, 30);
 

  fill(255);
  spectralCentroid = fft.getCentroid();


  let angleIncrement = 180 / spectrumLength;
  let currentAngle = 0;

  for (let i = 0; i < spectrumLength; i++) {
    let radius = map(spectrum[i]*5, 0, 300, 200, 300); 
    let x = width / 2 + cos(currentAngle) * radius;
    let y = height / 2 + sin(currentAngle) * radius;

    ellipse(x, y, 61, 10); 

    currentAngle += angleIncrement;
   
  }



  let nyquist = 22050;

  spectralCentroid = fft.getCentroid();

  let mean_freq_index = spectralCentroid / (nyquist / spectrum.length);
  

  centroidplot = map(log(mean_freq_index), 0, log(spectrum.length), 0, width);
  


  fill(255,191); 

  text(round(spectralCentroid) , 500, 300);
  textAlign(CENTER);
  textSize(200);
  textStyle(BOLD);
  fill(255); 
}


function mousePressed() {
  if (song.isPlaying()) {

    song.stop();
    background(255, 0, 0);
  } else {
    
    userStartAudio();
    song.play();
    background(0, 255, 0);
  }

}

