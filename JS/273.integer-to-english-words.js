/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
  if(num == 0) return "Zero";
  let _floor = Math.floor.bind(Math);
  const belowTen = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
  const belowTwenty = ["Ten", "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
  const belowHundred = ["", "Ten", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  
  return helper(num);
  
  function helper(num) {
    let str = "";
    if(num < 10) str = belowTen[num];
    else if(num < 20) str = belowTwenty[num - 10];
    else if(num < 100) str = belowHundred[_floor(num / 10)] + " " + helper(num % 10);
    else if(num < 1000) str = helper(_floor(num / 100)) + " Hundred " + helper(num % 100);
    else if(num < 1000000) str = helper(_floor(num / 1000)) + " Thousand " + helper(num % 1000);
    else if(num < 1000000000) str = helper(_floor(num / 1000000)) + " Million " + helper(num % 1000000);
    else str = helper(_floor(num / 1000000000)) + " Billion " + helper(num % 1000000000);
    return str.trim();
  }
};