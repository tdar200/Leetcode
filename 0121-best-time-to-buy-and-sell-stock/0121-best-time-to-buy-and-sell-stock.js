/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let tempDifference = 0;
  let differnce = 0;

  let tempMin = Math.max(...prices);

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < tempMin) {
      tempMin = prices[i];
    }

    tempDifference = prices[i + 1] - tempMin;

    if (tempDifference > differnce) {
      differnce = tempDifference;
    }
  }

  return differnce;
};