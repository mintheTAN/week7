function setup() {
  createCanvas(800, 800);
  background(79, 130, 130);

  noFill();
  stroke(0);
  strokeWeight(1.5);

  // Group 1
  drawEllipseGroup(103, 196, 116, 116, color(166, 224, 224));
  drawEllipseGroup(103, 196, 75, 75, color(18, 76, 18));
  drawEllipseGroup(103, 196, 54, 54, color(127, 0, 63));
  drawEllipseGroup(103, 196, 34, 34, color(0));
  drawEllipseGroup(103, 196, 22, 22, color(255));

  // Group 2
  drawEllipseGroup(341, 45, 116, 116, color(226, 226, 40));
  drawEllipseGroup(341, 45, 75, 75, color(255, 86, 86));
  drawEllipseGroup(341, 45, 54, 54, color(18, 76, 18));
  drawEllipseGroup(341, 45, 34, 34, color(0));
  drawEllipseGroup(341, 45, 22, 22, color(127, 0, 127));
  drawEllipseGroup(341, 45, 116, 116, color(226, 226, 40));
  drawEllipseGroup(341, 45, 75, 75, color(255, 86, 86));
  drawEllipseGroup(341, 45, 54, 54, color(18, 76, 18));
  drawEllipseGroup(341, 45, 34, 34, color(0));
  drawEllipseGroup(341, 45, 22, 22, color(127, 0, 127));

  // Group 3
  drawEllipseGroup(474, 293, 116, 116, color(226, 226, 40));
  drawEllipseGroup(474, 293, 75, 75, color(255, 86, 86));
  drawEllipseGroup(474, 293, 54, 54, color(18, 76, 18));
  drawEllipseGroup(474, 293, 34, 34, color(0));
  drawEllipseGroup(474, 293, 22, 22, color(127, 0, 127));
  drawEllipseGroup(474, 293, 116, 116, color(255, 170, 170));
  drawEllipseGroup(474, 293, 75, 75, color(166, 224, 224));
  drawEllipseGroup(474, 293, 54, 54, color(255, 0, 255));
  drawEllipseGroup(474, 293, 34, 34, color(0));
  drawEllipseGroup(474, 293, 22, 22, color(95, 191, 0));

  // Group 4
  drawEllipseGroup(335, 754, 116, 116, color(226, 226, 40));
  drawEllipseGroup(335, 754, 75, 75, color(255, 86, 86));
  drawEllipseGroup(335, 754, 54, 54, color(18, 76, 18));
  drawEllipseGroup(335, 754, 34, 34, color(0));
  drawEllipseGroup(335, 754, 22, 22, color(127, 0, 127));
  drawEllipseGroup(335, 754, 116, 116, color(226, 226, 40));
  drawEllipseGroup(335, 754, 75, 75, color(255, 86, 86));
  drawEllipseGroup(335, 754, 54, 54, color(18, 76, 18));
  drawEllipseGroup(335, 754, 34, 34, color(0));
  drawEllipseGroup(335, 754, 22, 22, color(247, 249, 244));

  // Group 5
  drawEllipseGroup(474, 545, 116, 116, color(226, 226, 40));
  drawEllipseGroup(474, 545, 75, 75, color(255, 86, 86));
  drawEllipseGroup(474, 545, 54, 54, color(18, 76, 18));
  drawEllipseGroup(474, 545, 34, 34, color(0));
  drawEllipseGroup(474, 545, 22, 22, color(127, 0, 127));
  drawEllipseGroup(474, 545, 116, 116, color(201, 201, 46));
  drawEllipseGroup(474, 545, 75, 75, color(255, 86, 86));
  drawEllipseGroup(474, 545, 54, 54, color(255, 0, 0));
  drawEllipseGroup(474, 545, 34, 34, color(0));
  drawEllipseGroup(474, 545, 22, 22, color(118, 191, 45));

  // Group 6
  drawEllipseGroup(690, 142, 116, 116, color(226, 226, 40));
  drawEllipseGroup(690, 142, 75, 75, color(255, 86, 86));
  drawEllipseGroup(690, 142, 54, 54, color(18, 76, 18));
  drawEllipseGroup(690, 142, 34, 34, color(0));
  drawEllipseGroup(690, 142, 22, 22, color(127, 0, 127));
  drawEllipseGroup(690, 142, 116, 116, color(255, 127, 0));
  drawEllipseGroup(690, 142, 75, 75, color(25, 25, 25));
  drawEllipseGroup(690, 142, 54, 54, color(18, 76, 18));
  drawEllipseGroup(690, 142, 34, 34, color(0));
  drawEllipseGroup(690, 142, 22, 22, color(127, 0, 127));

  // Group 7
  drawEllipseGroup(705, 457, 116, 116, color(226, 226, 40));
  drawEllipseGroup(705, 457, 75, 75, color(255, 86, 86));
  drawEllipseGroup(705, 457, 54, 54, color(18, 76, 18));
  drawEllipseGroup(705, 457, 34, 34, color(0));
  drawEllipseGroup(705, 457, 22, 22, color(127, 0, 127));
  drawEllipseGroup(705, 457, 116, 116, color(255));
  drawEllipseGroup(705, 457, 75, 75, color(79, 130, 130));
  drawEllipseGroup(705, 457, 54, 54, color(255, 0, 255));
  drawEllipseGroup(705, 457, 34, 34, color(86, 255, 170));
  drawEllipseGroup(705, 457, 22, 22, color(95, 191, 0));

  // Group 8
  drawEllipseGroup(686, 726, 116, 116, color(226, 226, 40));
  drawEllipseGroup(686, 726, 75, 75, color(255, 86, 86));
  drawEllipseGroup(686, 726, 54, 54, color(18, 76, 18));
  drawEllipseGroup(686, 726, 34, 34, color(0));
  drawEllipseGroup(686, 726, 22, 22, color(127, 0, 127));
  drawEllipseGroup(686, 726, 116, 116, color(255));
  drawEllipseGroup(686, 726, 75, 75, color(255, 170, 170));
  drawEllipseGroup(686, 726, 54, 54, color(166, 224, 224));
  drawEllipseGroup(686, 726, 34, 34, color(86, 255, 170));
  drawEllipseGroup(686, 726, 22, 22, color(255));

  // Group 9
  drawEllipseGroup(212, 428, 116, 116, color(226, 226, 40));
  drawEllipseGroup(212, 428, 75, 75, color(255, 86, 86));
  drawEllipseGroup(212, 428, 54, 54, color(18, 76, 18));
  drawEllipseGroup(212, 428, 34, 34, color(0));
  drawEllipseGroup(212, 428, 22, 22, color(127, 0, 127));
  drawEllipseGroup(212, 428, 116, 116, color(255));
  drawEllipseGroup(212, 428, 75, 75, color(255, 170, 170));
  drawEllipseGroup(212, 428, 54, 54, color(18, 76, 18));
  drawEllipseGroup(212, 428, 34, 34, color(0));
  drawEllipseGroup(212, 428, 22, 22, color(130, 158, 102));

  // Group 10
  drawEllipseGroup(73, 660, 116, 116, color(226, 226, 40));
  drawEllipseGroup(73, 660, 75, 75, color(255, 86, 86));
  drawEllipseGroup(73, 660, 54, 54, color(18, 76, 18));
  drawEllipseGroup(73, 660, 34, 34, color(0));
  drawEllipseGroup(73, 660, 22, 22, color(127, 0, 127));
  drawEllipseGroup(73, 660, 116, 116, color(255, 255, 86));
  drawEllipseGroup(73, 660, 75, 75, color(255, 170, 170));
  drawEllipseGroup(73, 660, 54, 54, color(255, 0, 0));
  drawEllipseGroup(73, 660, 34, 34, color(0));
  drawEllipseGroup(73, 660, 22, 22, color(132, 158, 102));
}

function drawEllipseGroup(x, y, rx, ry, col) {
  noStroke();
  fill(col);
  ellipse(x, y, rx * 2, ry * 2);
}
