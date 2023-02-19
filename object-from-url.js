const urlDecode = function(text) {
  // Put your solution here
  //replace %20 with spaces to separate key/value pairs, split into an array of pairs 
  let pairs = text.replace(/%20/g, " ").split("&");
  let finalObj = {};
  //loop through pairs and assign key/value to finalObj
  for(const i in pairs) {
    let split = pairs[i].split("=");
    finalObj[split[0]] = split[1];  
  }
  return finalObj;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);

/* expected output
{duck: "rubber"}
{bootcamp: "Lighthouse Labs"}
{city: "Vancouver", weather: "lots of rain"}
"lots of rain"
Rules:
%20 represents a space character.
Key-value pairs are represented using an = character: key=value
Multiple key-value pairs are separated using a & character: key1=value1&key2=value2
*/