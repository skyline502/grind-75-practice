/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day
in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.

Example 1:

Input: prices = [7,1,5,3,6,4]
Output: 5
Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
Example 2:

Input: prices = [7,6,4,3,1]
Output: 0
Explanation: In this case, no transactions are done and the max profit = 0.

*/

//your code here...
//min
//profit
//iterate through prices
//if current price is < min, reassing min
//calculate current price - min for profit and reassing accordingly
//return profit

const maxProfit = prices => {
  let min = prices[0] //set the min price to first price
  let profit = 0; //instantiate profit to 0

  for (let i = 1; i < prices.length; i++) { //iterate through array starting at index 1
    if (prices[i] < min) {
      min = prices[i];
    }
    if (prices[i] - min > profit) {
      profit = prices[i] - min;
    }
  }
  return profit;
};

//Examples:

let prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices)) //=> 0;

prices = [7,1,5,3,6,4];

console.log(maxProfit(prices)); //=> 5
