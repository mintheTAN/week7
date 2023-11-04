let song;
let amplitude;
let sideLength = 200; 
let gap = 10; 
let rows = 5; 
let cols = 5; 
let rotationSpeed = 0.001; 
let smallEllipseDiameter = 14; 
let smallEllipseCount = 12; 
let smallEllipseDistance = 20; 
let concentricCircles = 4; 
let concentricCircleColors = []; 
let dottedCircles = 3; 
let musicAndAnimationActive = true;

function preload() {
    song = loadSound("assets/lion_king_audio.mp3"); //Loads the audio file "circle of life.mp3" into the song variable.
 
}

function setup() {
    amplitude = new p5.Amplitude();
    song.play();
    createCanvas(1000, 800);
    angleMode(DEGREES); 
    genRundomColors(); 
}

function draw() {
    
    background("#c8aa15");
    changeRotationSpeed();
    drawConcentricCircles();
    
  
}

function genRundomColors() {

    for (let i = 0; i < rows; i++) {
        concentricCircleColors.push([]); 
        for (let j = 0; j < cols; j++) {
            concentricCircleColors[i].push([]);
            for (let k = 0; k < concentricCircles; k++) {
                concentricCircleColors[i][j].push(color(random(255), random(255), random(255)));
            }
        }
    }
}

function getContrastColor(hexColor) {
    let c = color(hexColor);
    let r = red(c); 
    let g = green(c); 
    let b = blue(c); 
    let contrastR = 255 - r;
    let contrastG = 255 - g;
    let contrastB = 255 - b;
    return color(contrastR, contrastG, contrastB);
}

function drawWaveCircle(i, j, k, radius) {
    push();
    rotate((frameCount * rotationSpeed ) / (50.0 / (k + 30)));
    //The rotation angle depends on the frame count, the rotationSpeed, and the value of k. This rotation creates the dynamic and wavy effect in the circular shape.
   
    beginShape();
    noFill();
    stroke(getContrastColor(concentricCircleColors[i][j][k])); 
    strokeWeight(2);
    for (let angle = 0; angle < 360; angle += 2) {
        let r = radius * 0.85 + 12 * sin(80 * angle); 
        let x = r * cos(angle);
        let y = r * sin(angle);
        vertex(x, y);
    }
    endShape(CLOSE);
    beginShape();

    for (let angle = 0; angle < 360; angle += 1.5) {
        let r = 38 + 8 * sin(60 * angle); 
        let x = r * cos(angle);
        let y = r * sin(angle);
        vertex(x, y);
    }
    endShape(CLOSE);
    pop();
}

function drawDottedCircle(i, j, k, radius) {
    for (let n = 0; n < dottedCircles && k < concentricCircles - 1; n++) {
        push();
        rotate (frameCount  * (rotationSpeed )) / (50.0 / (k + 30));
        stroke(getContrastColor(concentricCircleColors[i][j][k])); 
        strokeWeight(5 - k); 
        noFill(); 
        drawingContext.setLineDash([5, 10 + k]);
        ellipse(0, 0, radius * 2 - 10 - 20 * n);
        pop();
        drawingContext.setLineDash([]); 
    }
}

function drawSmallEllipses() {
    let smallEllipses = [];
    for (let k = 0; k < smallEllipseCount; k++) {
        let angle = map(k, 0, smallEllipseCount, 0, 360);
        let x = (sideLength / 2 + smallEllipseDistance) * cos(angle + smallEllipseDistance);
        let y = (sideLength / 2 + smallEllipseDistance) * sin(angle + smallEllipseDistance * 1.5);
        smallEllipses.push({ x, y });
    }
  
    stroke('#E8670D');
    strokeWeight(4);
    noFill();
    beginShape();
    drawingContext.setLineDash([3, 4]);
    for (let l = 0; l < smallEllipseCount; l++) {
        curveVertex(smallEllipses[l].x, smallEllipses[l].y);
    }
    endShape(CLOSE);

    for (let l = 0; l < smallEllipseCount; l++) {
        let ellipseRadius = smallEllipseDiameter * 2.5; 
     
        for (let i = 0; i <= ellipseRadius; i++) {
            let t = map(i, 0, ellipseRadius, 0, 1); 
            let gradientColor = lerpColor(color(255), color(0), t); 
            fill('#158cc8'); 
            noStroke(); 
            ellipse(smallEllipses[l].x, smallEllipses[l].y, smallEllipseDiameter - i, smallEllipseDiameter - i); 
        }
    }
}



function drawGradientArc2() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            push();
            translate((j + 0.5 * (i % 2)) * (sideLength + gap * 4), i * (sideLength + gap) + sideLength / 2); 
            if (!(i % 2 === 0 && j % 2 !== 0) && !(i % 2 !== 0 && j % 2 === 0)) {
                let arcStartAngle = 180; 
                let arcEndAngle = 360; 
                for (let i = arcStartAngle; i <= arcEndAngle; i++) {
                    let t = map(i, arcStartAngle, arcEndAngle, 0, 1); 
                    
                    stroke('#c83315'); 
                    strokeWeight(5); 
                    noFill(); 
                    arc(sideLength - gap * 8, 0, sideLength + gap * 4, sideLength * 1, i, i + 1); 
                
                }
            }
            pop();
        }
    }
}

function drawConcentricCircles() {
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            push();
            translate((j + 0.5 * (i % 2)) * (sideLength + gap * 4), i * (sideLength + gap) + sideLength / 2); 
    
            for (let k = 0; k < concentricCircles; k++) {
                let radius = sideLength / 2 - k * (sideLength / (1.6 * concentricCircles));
                fill(concentricCircleColors[i][j][k]); 
                noStroke(); 
                ellipse(0, 0, radius * 2, radius * 2); 
                if (i % 2 === 0 && j % 2 !== 0) {
                    drawWaveCircle(i, j, k, radius);
                } else {
                    drawDottedCircle(i, j, k, radius);
                }
            }
            drawSmallEllipses();
            
            pop();
        }
    }
    drawGradientArc2();
}
//Change the rotation speed based on the volume level of the audio
function changeRotationSpeed() {
    if (frameCount % 20 === 0 && musicAndAnimationActive) {
        //This condition checks if the current frame count is a multiple of 20 (every 20 frames) and if the musicAndAnimationActive flag is true. This condition controls how often the rotation speed is updated.
        let level = amplitude.getLevel();// This line retrieves the current amplitude level of the music being played. 
        let targetSpeed = map(level, 0, 1, 0, 20);
        //the amplitude level is mapped from the range [0, 1] to a new range of [0.01, 20]. 
        rotationSpeed = lerp(rotationSpeed, targetSpeed, 0.1);//the rotation speed gradually changes in response to changes in music loudness.
        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                for (let k = 0; k < concentricCircles; k++) {
                    concentricCircleColors[i][j][k] =color(random(30, 255), random(0,30), random(50, 100)); 
                }//his creates a dynamic and colorful visual effect as the music's loudness changes.
            }
        }
    }
}

function mousePressed() {
if (song.isPlaying()) {
song.stop();

} else {
song.play();
;
}
}//Starts or stops playing the audio when the mouse is pressed