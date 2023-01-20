const data = require("./test.json");
const fs = require('fs');

const getDMarkets = (item) => {
    return item.content.d.new_markets;
};

// task 4
const markets = data.map(getDMarkets);

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

// sort the array
marketNames.sort();
console.log(marketNames);

// write results in json file
//let json = JSON.stringify(definedMarkets);
//fs.writeFile("task4_test.json", json, (err) => err && console.log(err));