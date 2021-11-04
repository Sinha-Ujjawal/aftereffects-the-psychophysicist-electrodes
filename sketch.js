function canvasShape() {
  return [200, 200];
}

function getCenter() {
  const centerX = width / 2;
  const centerY = height / 2;
  return [centerX, centerY];
}

function drawRing(cx, cy, outerRadius, thickness, color) {
  stroke(color);
  fill(color);
  circle(cx, cy, outerRadius);
  if (outerRadius > thickness) {
    erase();
    circle(cx, cy, outerRadius - thickness);
    noErase();
    noStroke();
    noFill();
  }
}

const DELTA = 0.5;
const THICKNESS = 5;
const MAX_RINGS = 20;
const SPACINGS = 12;
const MAX_ADDS = SPACINGS / DELTA;

let adds;
let rings;
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

  frameRate(30);

  rings = [...Array(MAX_RINGS).keys()]
    .map((x) => x * SPACINGS)
    .sort((x, y) => y - x);
  adds = 0;
}

function draw() {
  clear();
  fill(255);
  const [centerX, centerY] = getCenter();
  rings.forEach((r) => {
    drawRing(centerX, centerY, r, THICKNESS, "black");
  });
  rings = rings.map((x) => x + DELTA);
  adds += 1;
  if (adds === MAX_ADDS) {
    adds = 0;
    rings.push(0);
    if (rings.length == MAX_RINGS) rings.shift();
  }
}
