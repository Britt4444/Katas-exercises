const camelCase = function(input) {
  //split input into array
  let result = input.split(" ");
  //loop through string
  for(let i = 0; i < result.length; i++) {
  //capitalize first letter starting at index 1
    if(i > 0){
      result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }
  }
  finalResult = result.join("");
  return finalResult;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));

/*expected output
thisIsAString
loopyLighthouse
supercalifragalisticexpialidocious*/