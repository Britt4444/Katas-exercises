const numberOfVowels = function(data) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let numVowels = 0;
  for(let i = 0; i<data.length; i++) {
    if(vowels.includes(data[i])) {
      numVowels += 1;
    }
  }
  return numVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));