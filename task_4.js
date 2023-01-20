const data = require("./test.json");

const getMarkets = (item) => {
    return item.content.d.new_markets;
};

// task 4
const markets = data.map(getMarkets);

let names = [];
for (i = 0; i < markets.length; i++) {
    if (JSON.stringify(markets[i]) !== '{}') { // if is not empty
        for ([market] of Object.entries(markets[i])) {
            names.push(market);
        }
    }
}

// remove repetitions
const marketNames = names.filter((name, index) => names.indexOf(name) === index);

// sort the array and show results
marketNames.sort();
console.log(marketNames);