function maxProfit(stockPrices) {
  var profit = -1;
  for(var i = 0; i < stockPrices.length; i++) {
    for(var j = i + 1; j < stockPrices.length; j++) {
      if(stockPrices[j] - stockPrices[i] > profit) {
        profit = stockPrices[j] - stockPrices[i];
      }
    }
  }
  if(profit === 0) {
   return profit = -1;
  }
  return profit;
}

module.exports = maxProfit;
