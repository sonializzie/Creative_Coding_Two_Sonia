//p5 Functions needs to be defined in the setup() or draw()

function drawBoxes(numBoxes, boxWidth, boxHeight, boxSpacing) {
  //== Comparator Operator
  //= Assignment Operator
  if (numBoxes == 20) {
    return "too many boxes";
  }
  fill(255, 0, 0);
  stroke(255);
  for (let i = 0; i < numBoxes; i++) {
    rect(i * boxSpacing, 30, boxWidth, boxHeight);
  }

  return "completed";
}
