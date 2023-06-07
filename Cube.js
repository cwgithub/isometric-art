class Cube {
  constructor(c, r, z, cubeIndex, cubeCount) {
    this.c = c;
    this.r = r;
    this.z = z;
    this.cubeIndex = cubeIndex;
    this.cubeCount = cubeCount;

    this.red = random(255);
    this.green = random(255);
    this.blue = random(255);
  }

  draw() {
    const x = gridTopX + ((this.c - this.r) * sideLength * sqrt(3)) / 2;
    const y =
      gridTopY + ((this.c + this.r) * sideLength) / 2 - sideLength * this.z;

    const points = [];
    for (let angle = PI / 6; angle < PI * 2; angle += PI / 3) {
      points.push(
        createVector(x + cos(angle) * sideLength, y + sin(angle) * sideLength)
      );
    }

    // if (this.n === 0) {
    //   fill(123);
    // } else {
    //   fill(255);
    // }

    const shade = floor((255 / this.cubeCount) * this.cubeIndex);
    fill(shade);

    // right side of cube
    // fill(this.red * 0.75, this.green * 0.75, this.blue * 0.75, 0.1);
    quad(
      x,
      y,
      points[5].x,
      points[5].y,
      points[0].x,
      points[0].y,
      points[1].x,
      points[1].y
    );

    // left side of cube
    // fill(this.red * 0.9, this.green * 0.9, this.blue * 0.9, 0.1);
    quad(
      x,
      y,
      points[1].x,
      points[1].y,
      points[2].x,
      points[2].y,
      points[3].x,
      points[3].y
    );

    // top of cube
    // fill(this.red, this.green, this.blue, 0.8);
    quad(
      x,
      y,
      points[3].x,
      points[3].y,
      points[4].x,
      points[4].y,
      points[5].x,
      points[5].y
    );
  }

  getSortString() {
    return this.z + "." + this.r + "." + this.c;
  }
}
