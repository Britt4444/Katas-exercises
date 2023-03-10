const calculateChange = function(total, cash) {
  // Your code here
  //calculate change in cents
  let totalChange = cash - total;
  let changeBreakdown = {};
  //assign types of change and their values
  const changeTypes = ["twentyDollar", "tenDollar", "fiveDollar", "twoDollar", "oneDollar", "quarter", "dime", "nickel", "penny"];
  const changeValues = [2000, 1000, 500, 200, 100, 25, 10, 5, 1];
  //calculate amount of each changeType
  let typeAmount;
  for(let i = 0; i < changeValues.length; i++) {
    typeAmount = Math.floor(totalChange/changeValues[i]);
    if(typeAmount > 0) {
      changeBreakdown[changeTypes[i]] = typeAmount;
      totalChange = totalChange % changeValues[i];
    }
  }
  return changeBreakdown;
};

console.log(calculateChange(1787, 2000)); //totalChange = 213
console.log(calculateChange(2623, 4000)); //totalChange = 1337
console.log(calculateChange(501, 1000)); //totalChange = 499

/*expected output:
{ twoDollar: 1, dime: 1, penny: 3 }
{ tenDollar: 1, twoDollar: 1, oneDollar: 1, quarter: 3, penny: 2 }
{ twoDollar: 2, quarter: 3, dime: 2, penny: 4 }

We will be given two numbers, the total of a transaction, 
and the amount of cash given to the cashier. Both of these 
numbers will be represented as whole numbers in cents. 
Therefore $10 will be represented as 1000.

Our function calculateChange should return an object which 
describes the total amount of change for the cashier to give back. 
Although pennies are not used in circulation, we will still 
calculate the amount of pennies to give back.

Valid denominations are as follows:

Twenty dollars
Ten dollars
Five dollars
Two dollars
One dollar
Quarter (25¢)
Dime (10¢)
Nickel (5¢)
Penny (1¢) 
*/