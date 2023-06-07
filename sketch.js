let gridTopX;
let gridTopY;
const sideLength = 30;

const cubeCount = 20;
const cubes = [];

let cubeIndex = 0;

function setup() {
  createCanvas(600, 600);
  gridTopX = width / 2;
  gridTopY = height / 2;

  strokeWeight(0.5);

  cubes.push(new Cube(0, 0, 0, cubeIndex++, cubeCount));

  while (cubes.length < cubeCount) {
    addRandomCube();
  }

  // Sort so the cubes are drawn in the right order
  cubes.sort((a, b) => {
    return a.getSortString().localeCompare(b.getSortString());
  });
}

function keyPressed() {
  if (cubes.length > 1) {
    rCube = cubes.pop();
  }
}

function draw() {
  background(180);

  for (const cube of cubes) {
    cube.draw();
  }
}

function addRandomCube() {
  let cubeAdded = false;

  while (!cubeAdded) {
    const randomCube = random(cubes);
    console.log(randomCube);

    let newCubeC = randomCube.c;
    let newCubeR = randomCube.r;
    let newCubeZ = randomCube.z;

    const r = random(1);
    if (r < 0.3) {
      newCubeC += floor(random(4));
    } else if (r < 0.6) {
      newCubeR += floor(random(4));
    } else {
      // newCubeZ += floor(random(4));
    }

    const spotTaken = cubes.some((cube) => {
      return cube.c == newCubeC && cube.r == newCubeR && cube.z == newCubeZ;
    });

    if (!spotTaken) {
      cubes.push(
        new Cube(newCubeC, newCubeR, newCubeZ, cubeIndex++, cubeCount)
      );
      cubeAdded = true;
    }
  }
}
