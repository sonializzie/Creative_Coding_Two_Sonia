//p5 Functions needs to be defined in the setup() or draw()

function drawGrid(xGrid, yGrid) {
  let boxWidth = width / xGrid;
  let boxHeight = height / yGrid;
  fill(0, 0, 255);
  stroke(255);
  for (let y = 0; y < yGrid; y++) {
    for (let x = 0; x < xGrid; x++) {
      push();
      translate(x * boxWidth + boxWidth / 2, y * boxHeight + boxHeight / 2);
      rotate(5);
      rect(0, 0, boxWidth, boxHeight);
      pop();
    }
  }
}
