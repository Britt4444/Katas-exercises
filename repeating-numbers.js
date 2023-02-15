const repeatNumbers = function(data) {
//variables
let results = [];

//use forEach to work with each array item and multiple arrays
data.forEach(function(array) {
  let x = array[0];
//create results
  let string = x.toString().repeat(array[1]);
  results.push(string);
});

//add commas if needed
results.join(', ');
//return results as a string
return results.toString();
}


console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));

/*The first will be the value to repeat, the second will be the amount of times to repeat that value.
Create a function named repeatNumbers that will return a string with each of the given values repeated 
the appropriate number of times, if there are multiple sets of values each set should be separated by 
a comma. If there is only one set of values then you should omit the comma.*/