function canvasShape() {
  return [600, 600];
}

function getCenter() {
  const centerX = width / 2;
  const centerY = height / 2;
  return [centerX, centerY];
}

function drawRing(cx, cy, outerRadius, thickness, color) {
  stroke(color);
  strokeWeight(thickness);
  circle(cx, cy, outerRadius);
  if (outerRadius > thickness) {
    circle(cx, cy, outerRadius - thickness);
  }
  noStroke();
}

const DELTA = 1.0;
const THICKNESS = 3;
const MAX_RINGS = 30;
const SPACINGS = 25;

let delta = 0;
let cnv;

function centerCanvas() {
  var x = (windowWidth - width) / 2;
  var y = (windowHeight - height) / 2;
  cnv.position(x, y);
}

function setup() {
  const [width, height] = canvasShape();
  cnv = createCanvas(width, height);
  centerCanvas();
  frameRate(60);
}

function draw() {
  clear();
  fill(255);
  const [centerX, centerY] = getCenter();
  for (r = MAX_RINGS - 1; r >= 0; r--) {
    drawRing(centerX, centerY, r * SPACINGS + delta, THICKNESS, "black");
  }
  delta = (delta + DELTA) % SPACINGS;
}
