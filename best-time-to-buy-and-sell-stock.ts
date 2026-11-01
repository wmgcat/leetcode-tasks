function maxProfit(prices: number[]): number {
    let result = 0;
    for (let i = 0, min = Infinity; i < prices.length; i++) {
        if (prices[i] < min)
            min = prices[i];
        
        const diff = prices[i] - min;
        if (result < diff)
            result = diff;
    }
    return result;
}
