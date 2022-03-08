//p5 Functions needs to be defined in the setup() or draw()

let data01 = [
  { value: 26, label: "Oranges" },
  { value: 32, label: "Apples" },
  { value: 43, label: "Bananas" },
  { value: 16, label: "Pears" },
];

let chart01;

//The setup function only excutes the code once
function setup() {
  createCanvas(1420, 800);

  chart01 = new BarChart(data01, "Hello");
  chart01.chartWidth = 500;
  chart01.chartHeight = 500;
  chart01.posX = 100;
  chart01.posY = 650;
  chart01.updateValues();
}

//The draw function can excute the code a number of times
function draw() {
  background(30);
  chart01.render();
}
