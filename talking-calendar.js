const talkingCalendar = function(date) {
  // Your code here
  //split date input into items separated by /
  let dateArray = date.split("/");
  //break down and transform values of each array item to match output
  let month = new Date(dateArray[1]).toLocaleString("en-us", {month: "long"});
  let year = dateArray[0];
  let day = parseInt(dateArray[2]);
  //add ordinal suffixes to day and note that day is now an integer
  let ordinal = '';
  if (day === 1 || day === 21 || day === 31) {
    ordinal = 'st';
  } else if (day === 2 || day === 22) {
    ordinal = 'nd';
  } else if (day === 3 || day === 23) {
    ordinal = 'rd';
  } else {
    ordinal = 'th';
  }
  //return date in expected format
  return month + ' ' + (day+ordinal) + ' ' + year;
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));

/*We will be given a date as a string (not a Date object). 
The date will always be formatted as YYYY/MM/DD. We will 
have to parse the given string and produce a human readable date.
expected output:

December 2nd, 2017
November 11th, 2007
August 24th, 1987
*/