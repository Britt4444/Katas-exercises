// Use the value below whenever you need the value of Pi
const PI = 3.14159 ;

const sphereVolume = function (radius) {
  // Code here!  V = 4/3 π r³
  return (4/3) * PI * (radius ** 3);
}

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  // And here! V=1/3hπr²
  return (1/3) * height * PI * (radius ** 2);
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  // Probably here too! V = hwd
  return height * width * depth;
}

console.log(prismVolume(3, 4, 5) === 60);

const totalVolume = function (solids) {
  // Code here? Yup!
  let volumeTotal = 0;
  for(const shape in solids) {
    if(solids[shape].type === 'sphere') {
      volumeTotal += sphereVolume(solids[shape].radius);
    } else if(solids[shape].type === 'cone') {
      volumeTotal += coneVolume(solids[shape].radius, solids[shape].height);
    } else if(solids[shape].type === 'prism') {
      volumeTotal += prismVolume(solids[shape].height, solids[shape].width, solids[shape].depth)
    }
  }
  return volumeTotal; 
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]

console.log(totalVolume(duck));

console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);


/*The first three will calculate the volume of the individual shapes:

sphereVolume()will calculate the volume of a sphere given a radius
coneVolume() will calculate the volume of a cone given a radius and a height
prismVolume() will calculate the volume of a prism given a height, a width, and a depth

The fourth function, totalVolume(), will receive an array containing the different shapes 
that make up a single attraction. The totalVolume function should use the previous three 
functions to calculate the total volume of an attraction.*/