const squareCode = function(message) {
  // Put your solution here
  //remove spaces
  let array = message.replace(/\s/g, '').split("");
  for(let i = 0; i < array.length; i++) {
    array.join("");
    console.log(array);
    let columns = (Math.ceil(Math.sqrt(array.length)));
    if(i < columns) {
      array = array[i];
    } 
  }
  return array;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));

/*
expected output:

clu hlt io  
fto ehg ee dd
hae and via ecy
imtgdvs fearwer mayoogo anouuio ntnnlvt wttddes aohghn sseoau
*/