var assert = require('chai').assert;
var stockMarketPro = require('./stockMarketPro');

describe('StockMarket Profit Finder', function() {
  it("should return true if result matches 16", function() {
    var prices = [45, 24, 35, 31, 40, 38, 11];
    var result = stockMarketPro(prices);
    assert.isTrue(result === 16);
  });

  it("should return true if result is -1", function() {
    var prices = [85, 85, 62, 25];
    var result = stockMarketPro(prices);
    assert.isTrue(result === -1);
  })
});