//p5 Functions needs to be defined in the setup() or draw()

let showBoxes = true;
let numBoxes = 5;
let boxWidth = 10;
let boxHeight = 20;
let boxSpacing = 14;

//The setup function only excutes the code once
function setup() {
  createCanvas(500, 500);
  background(100); // sets to specify colour //Defining a function
}

//The draw function can excute the code a number of times
function draw() {
  if ((showBoxes = true)) {
    drawBoxes(numBoxes, boxWidth, boxHeight, boxSpacing);
  }
}
