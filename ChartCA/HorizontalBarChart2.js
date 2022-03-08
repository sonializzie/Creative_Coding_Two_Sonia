class HorizontalBarChart2 {
  constructor(_data) {
    this.data = _data;

    this.title = "2020 Irish Sheep Census";
    this.chartWidth = 300;
    this.chartHeight = 300;
    this.spacing = 5;
    this.margin = 30;
    this.numTicks = 10;
    this.posX = 50;
    this.posY = 400;
    this.tickIncrements;
    this.maxValue;
    this.numPlaces = 0;
    this.tickSpacing;
    this.barWidth;
    this.availableWidth;

    this.showValues = true;
    this.showLabels = true;
    this.rotateLabels = false;

    this.colors = [
      color("#C5D8A4"),
      color("#F4FCD9"),
      color("#C5D8A4"),
      color("#F4FCD9"),
    ];

    this.updateValues();
  }

  updateValues() {
    this.tickSpacing = this.chartWidth / this.numTicks;
    this.availableWidth =
      this.chartHeight -
      this.margin * 2 -
      this.spacing * (this.data.length - 1);
    this.barWidth = this.availableWidth / this.data.length;
    let listValues = this.data.map(function (x) {
      return x.total;
    });
    this.maxValue = max(listValues);
    this.tickIncrements = this.maxValue / this.numTicks;
  }

  render() {
    push();
    translate(this.posX, this.posY);

    this.drawTicks();
    this.drawVerticalLines();
    this.drawRects();
    this.drawAxis();
    this.drawTitle();
    pop();
  }

  scaleData(num) {
    return map(num, this.maxValue, 0, this.chartWidth, 0);
  }

  drawAxis() {
    //chart
    stroke(255, 180);
    strokeWeight(1);
    line(0, 0, 0, -this.chartHeight); //y
    line(0, 0, this.chartWidth, 0); //x
  }

  drawTitle() {
    //title
    noStroke();
    fill(255);
    textSize(16);
    textAlign(LEFT, BOTTOM);
    text(this.title, 0, -this.chartHeight - 40);
  }

  drawTicks() {
    for (let i = 0; i <= this.numTicks; i++) {
      //ticks
      stroke(255);
      strokeWeight(1);
      line(this.tickSpacing * i, 10, this.tickSpacing * i, -0);

      //numbers (text)
      if (this.showValues) {
        fill(255, 200);
        noStroke();
        textSize(12);
        textAlign(RIGHT, CENTER);
        text(
          (i * this.tickIncrements).toFixed(this.numPlaces),
          -this.tickSpacing * -i,
          20
        );
      }
    }
  }

  drawVerticalLines() {
    for (let i = 0; i <= this.numTicks; i++) {
      //vertical line
      stroke(255, 50);
      strokeWeight(1);
      line(
        -this.tickSpacing * -i,
        0,
        -this.tickSpacing * -i,
        -this.chartHeight
      );
    }
  }

  drawRects() {
    push();
    translate(0, this.margin);
    for (let i = 0; i < this.data.length; i++) {
      let colorNumber = i % 4;

      //bars
      fill(this.colors[colorNumber]);
      noStroke();
      rect(
        0,
        -this.chartHeight + (-this.barWidth + -this.spacing) * -i,
        this.scaleData(this.data[i].total),
        this.barWidth
      );

      //numbers (text)
      noStroke();
      fill(255);
      textSize(16);
      textAlign(LEFT, CENTER);
      text(
        this.data[i].total,
        -this.scaleData(-this.data[i].total),
        -this.chartHeight +
          (-this.barWidth + -this.spacing) * -i +
          this.barWidth / 2
      );

      //text
      if (this.showLabels) {
        if (this.rotateLabels) {
          push();
          noStroke();
          textSize(14);
          textAlign(LEFT, CENTER);
          translate((this.barWidth + this.spacing) * i + this.barWidth / 2, 10);
          rotate(PI / 2);
          text(this.data[i].name, 0, 0);
          pop();
        } else {
          noStroke();
          fill(255);
          textSize(14);
          textAlign(RIGHT, CENTER);
          text(
            this.data[i].name,
            -10,
            -this.chartHeight +
              (-this.barWidth + -this.spacing) * -i +
              this.barWidth / 2
          );
        }
      }
    }
    pop();
  }
}
