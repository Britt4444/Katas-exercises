const urlEncode = function(text) {
  //set needed variables
  let encoded = '';
  //remove white space around string 
  let trimmed = text.trim();
  //loop through trimmed array to replace spaces with %20
  for(let i = 0; i < trimmed.length; i++){
    if(trimmed[i] === ' '){
      encoded += "%20";
    } else {
      encoded += trimmed[i];
    }
  }
  return encoded;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));