class BarChart {
  constructor(_data) {
    this.data = _data;

    this.title = "2016 Irish Sheep Census";
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
    this.rotateLabels = true;

    this.colors = [
      color("#1572A1"),
      color("#9AD0EC"),
      color("#1572A1"),
      color("#9AD0EC"),
    ];

    this.updateValues();
  }

  updateValues() {
    this.tickSpacing = this.chartHeight / this.numTicks;
    this.availableWidth =
      this.chartWidth - this.margin * 2 - this.spacing * (this.data.length - 1);
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
    this.drawHorizontalLines();
    this.drawRects();
    this.drawAxis();
    this.drawTitle();
    pop();
  }

  scaleData(num) {
    return map(num, 0, this.maxValue, 0, this.chartHeight);
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
      line(0, this.tickSpacing * -i, -10, this.tickSpacing * -i);

      //numbers (text)
      if (this.showValues) {
        fill(255, 200);
        noStroke();
        textSize(14);
        textAlign(RIGHT, CENTER);
        text(
          (i * this.tickIncrements).toFixed(this.numPlaces),
          -15,
          this.tickSpacing * -i
        );
      }
    }
  }

  drawHorizontalLines() {
    for (let i = 0; i <= this.numTicks; i++) {
      //horizontal line
      stroke(255, 50);
      strokeWeight(1);
      line(0, this.tickSpacing * -i, this.chartWidth, this.tickSpacing * -i);
    }
  }

  drawRects() {
    push();
    translate(this.margin, 0);
    for (let i = 0; i < this.data.length; i++) {
      let colorNumber = i % 4;

      //bars for total
      fill(this.colors[colorNumber]);
      noStroke();
      rect(
        (this.barWidth + this.spacing) * i,
        0,
        this.barWidth,
        this.scaleData(-this.data[i].total)
      );

      //numbers (text)
      noStroke();
      fill(255);
      textSize(16);
      textAlign(CENTER, BOTTOM);
      text(
        this.data[i].total,
        (this.barWidth + this.spacing) * i + this.barWidth / 2,
        this.scaleData(-this.data[i].total)
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
          textAlign(CENTER, BOTTOM);
          text(
            this.data[i].name,
            (this.barWidth + this.spacing) * i + this.barWidth / 2,
            20
          );
        }
      }
    }
    pop();
  }
}
