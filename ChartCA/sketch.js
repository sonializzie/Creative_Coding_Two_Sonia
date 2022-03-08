let data01 = [
  { name: "Flocks", total: 36313, total2: 5849837 },
  { name: "Ewes", total: 2640048 },
  { name: "Rams", total: 83572 },
  { name: "Other Sheep", total: 1194405 },
  { name: "Total Sheep", total: 3918025 },
];

let data02 = [
  { name: "Flocks", total: 36313 },
  { name: "Ewes", total: 2640048 },
  { name: "Rams", total: 83572 },
  { name: "Other Sheep", total: 1194405 },
  { name: "Total Sheep", total: 3918025 },
];

let data03 = [
  { name: "Flocks", total: 36045 },
  { name: "Ewes", total: 2642784 },
  { name: "Rams", total: 87068 },
  { name: "Other Sheep", total: 1147645 },
  { name: "Total Sheep", total: 3877497 },
];

let data04 = [
  { name: "Flocks", total: 36045 },
  { name: "Ewes", total: 2642784 },
  { name: "Rams", total: 87068 },
  { name: "Other Sheep", total: 1147645 },
  { name: "Total Sheep", total: 3877497 },
];

let chart01;
let chart02;
let chart03;
let chart04;

function setup() {
  createCanvas(1420, 800);

  chart01 = new BarChart(data01);
  chart01.chartWidth = 400;
  chart01.chartHeight = 250;
  chart01.posX = 100;
  chart01.posY = 320;

  chart02 = new HorizontalBarChart(data02);
  chart02.chartWidth = 600;
  chart02.chartHeight = 200;
  chart02.posX = 700;
  chart02.posY = 300;

  chart03 = new BarChart2(data03);
  chart03.chartWidth = 400;
  chart03.chartHeight = 250;
  chart03.posX = 100;
  chart03.posY = 700;

  chart04 = new HorizontalBarChart2(data04);
  chart04.chartWidth = 600;
  chart04.chartHeight = 200;
  chart04.posX = 700;
  chart04.posY = 650;
}

function draw() {
  background(70);
  chart01.updateValues();
  chart01.render();
  chart02.updateValues();
  chart02.render();
  chart03.updateValues();
  chart03.render();
  chart04.updateValues();
  chart04.render();
}
