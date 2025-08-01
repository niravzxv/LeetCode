/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let lp = 0, rp = 1, profit = 0; //lp is buy, rp is sell
    while(rp < prices.length){
        //calculate profit
        if (prices[lp] < prices[rp]){
            const tempProfit = prices[rp] - prices[lp];
            profit = Math.max(tempProfit, profit);
        } else {
            lp = rp;
        }
        rp++;
    }
    return profit;
};