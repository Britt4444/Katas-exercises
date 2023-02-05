const sumLargestNumbers = function(data) {
    let highest = 0;
    let secondHighest = 0;
    for (i = 0; i < data.length; i++) {
      if (data[i] > highest) {
        highest = data[i];
      }
    }
    for (i = 0; i < data.length; i++) {
      if (data[i] > secondHighest && data[i] < highest) {
        secondHighest = data[i];
      }
    }
  return secondHighest + highest;
}


console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));