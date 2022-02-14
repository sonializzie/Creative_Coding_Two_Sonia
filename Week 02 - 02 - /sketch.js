//p5 Functions needs to be defined in the setup() or draw()

let chartWidth = 400;
let chartHeight = 400;
let data = [345, 123, 120, 233, 345, 123, 120, 233, 345, 123, 120, 233];
let margin = 20;
let spacing = 1;

let numTicks = 10;
let tickLength = 5;
// let tickDistance = 40;

let tickDistance = chartHeight / numTicks;
let tickIncrement = chartHeight / numTicks;

let sortData = true;
let remaingSpace = chartWidth - margin * 2 - spacing * (data.length - 1);
let barWidth = remaingSpace / data.length;

let colors;

console.log(barWidth);

//The setup function only excutes the code once
function setup() {
  createCanvas(500, 500);
  background(255); // sets to specify colour //Defining a function
  angleMode(DEGREES);
  colors = [color("blue"), color("orange"), color("cyan"), color("purple")];
  sort(data);
}

//The draw function can excute the code a number of times
function draw() {
  background(255);

  translate(50, 400);
  stroke(0);
  strokeWeight(3);
  //Y axis
  line(0, 0, 0, -400);
  //X axis
  line(0, 0, 400, 0);

  //Draw some ticks
  // line(0, 0, -tickLength, 0);
  // line(0, -40, -tickLength, -40);
  // line(0, -80, -tickLength, -80);
  // line(0, -120, -tickLength, -120);

  //For Loop for numTicks and tickDistance
  for (let i = 0; i <= numTicks; i++) {
    stroke(0);
    strokeWeight(2);
    line(0, i * -tickDistance, -tickLength, i * -tickDistance);

    //Tick text
    noStroke();
    fill(0);
    textSize(12);
    textAlign(RIGHT, CENTER);
    text(i * tickIncrement, -10, -i * tickDistance);
  }

  noStroke();

  translate(margin, 0);
  for (let i = 0; i < data.length; i++) {
    rect(i * (barWidth + spacing), 0, barWidth, -data[i]);
    fill(colors[i % 4]);
  }

  fill(0, 0, 255);
}
