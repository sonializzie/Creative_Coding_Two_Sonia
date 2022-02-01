//p5 Functions needs to be defined in the setup() or draw()


let space = 17;

let numSquares = 10;
let squareHeight = 20;
let squareWidth = 15;

let xOffset = 40;
let yOffset = 50;



//This is declaring a variable in a statement
let hello;

//This is assigning a variable with a value
hello = 1; // value

//This is declaring a function with no parameters
function helloWorld() {
  //no Parameters
}

//This is declaring a function with a couple of parameters with a variable
function helloWorld(num, length) {
  rect(50, 10, 100);
}

//This is calling a function with no parameters
helloWorld();

//The setup function only excutes the code once
function setup() {
  createCanvas(500, 500);
  background(100); // sets to specify colour //Defining a function
}



//The draw function can excute the code a number of times
function draw() {
  
  //   rect(50, 50, 50, 50);
  //   rect(110, 50, 50, 50);
  //   rect(170, 50, 50, 50);
  //   rect(230, 50, 50, 50);
  //   rect(290, 50, 50, 50);
    drawBoxes();
}

drawBoxes(){
    fill(255, 0, 0);
    for (let i = 0; i < numSquares; i++) {
        rect(i * space +xOffset, yOffset, squareWidth, squareHeight)
    }
}
