const makeCase = function(input, caseType) {
  // Put your solution here
  //create separate functions for each case
  //camelCase
  const camelCase = input => {
    let lowercaseWords = input.toLowerCase();
    let result = lowercaseWords.split(" ");
    result[0].toLowerCase();
    for (let i = 1; i < result.length; i++) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1); 
    }
    return result.join("");
  };
  //pascal
  const pascalCase = input => {
    let lowercaseWords = input.toLowerCase();
    let result = lowercaseWords.split(" ");
    for(let i = 0; i < result.length; i++) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }
    return result.join("");
  };
  //snake
  const snakeCase = input => {
    let lowercaseWords = input.toLowerCase();
    let result = lowercaseWords.split(" ");
    for(let i = 0; i < result.length; i++) {
      result[i] = result[i];
    }
    return result.join("_");
  };
  //kebab
  const kebabCase = input => {
    let lowercaseWords = input.toLowerCase();
    let result = lowercaseWords.split(" ");
    for(let i = 0; i < result.length; i++) {
      result[i] = result[i];
    }
    return result.join("-");
  };
  //title
  const titleCase = input => {
    let lowercaseWords = input.toLowerCase();
    let result = lowercaseWords.split(" ");
    for(let i = 0; i < result.length; i++) {
      result[i] = result[i].charAt(0).toUpperCase() + result[i].slice(1);
    }
    return result.join(" ");
  };
  //vowel
  const vowelCase = input => {
    let newStr = "";
    for(const i in input) {
      if(input[i] === "a" || input[i] === "e" || input[i] === "i" || input[i] === "o" || input[i] === "u") {
        newStr += input[i].toUpperCase();
        } else {
          newStr += input[i].toLowerCase();
        }
      }
      return newStr;
  };
  //consonant
  const consonantCase = input => {
    let newStr = "";
    for(const i in input) {
      if(input[i] !== "a" && input[i] !== "e" && input[i] !== "i" && input[i] !== "o" && input[i] !== "u") {
        newStr += input[i].toUpperCase();
        } else {
          newStr += input[i].toLowerCase();
        }
      }
    return newStr;
  };

  //create conditional statements to account for precendence of
  //if caseType is a string
  if (typeof caseType === 'string') {
    switch (caseType) {
      case "camel": 
      return camelCase(input);
      case "pascal": 
      return pascalCase(input);
      case "snake": 
      return snakeCase(input);
      case "kebab": 
      return kebabCase(input);
      case "title": 
      return titleCase(input);
      case "vowel": 
      return vowelCase(input);
      case "consonant": 
      return consonantCase(input);
      case "upper": 
      return input.toUpperCase();
      case "lower": 
      return input.toLowerCase();
    }
  } else {
    //if caseType is an array
    //precedence rule 1
    for (let i = 0; i < caseType.length; i++) {
      switch (caseType[i]) {
        case "camel": 
        input = camelCase(input); 
        continue;
        case "pascal": 
        input = pascalCase(input); 
        continue;
        case "snake": 
        input = snakeCase(input); 
        continue;
        case "kebab": 
        input = kebabCase(input); 
        continue;
        case "title": 
        input = titleCase(input); 
        continue;
      }
    }
    //precendence rule 2
    for (let i = 0; i < caseType.length; i++) {
      switch (caseType[i]) {
        case "consonant": 
        input = consonantCase(input); continue;
        case "vowel": 
        input = vowelCase(input); 
        continue;
      }
    }
    //precedence rule 3
    for (let i = 0; i < caseType.length; i++) {
      switch (caseType[i]) {
        case "upper": 
        input = input.toUpperCase(); 
        continue;
        case "lower": 
        input = input.toLowerCase(); 
        continue;
      }
    }
  }
  return input;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));

/*expected output:
thisIsAString
ThisIsAString
this_is_a_string
this-is-a-string
This Is A String
thIs Is A strIng
THiS iS a STRiNG
THIS_IS_A_STRING
We will still be given an input string to convert. 
Precedence of each of the casing styles are as follows, values higher in the list should be processed first:
1. camel, pascal, snake, kebab, title
2. vowel, consonant
3. upper, lower
*/
