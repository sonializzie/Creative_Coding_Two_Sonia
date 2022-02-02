//p5 Functions needs to be defined in the setup() or draw()

let showGrid = true;
let xGrid = 20;
let yGrid = 5;

//The setup function only excutes the code once
function setup() {
  createCanvas(500, 500);
  background(100); // sets to specify colour //Defining a function
}

//The draw function can excute the code a number of times
function draw() {
  if ((showGrid = true)) {
    drawGrid(xGrid, yGrid);
  }
}
