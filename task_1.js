const data = require("./test.json");
const fs = require('fs');

// get messages for every element and create an array of them
const getContents = (item) => {
    return item.content;
};

const contents = data.map(getContents); // the array of content objects
const bots = contents.map(({ bot }) => ({ bot }));

// task 1
let messageTypes = [];
let counters = [];

for (let i = 0; i < bots.length; i++) {
    let start = bots[i].bot.indexOf("/");
    let end = bots[i].bot.lastIndexOf("#");
    if (messageTypes.indexOf(bots[i].bot.substring(start, end)) < 0) {
        messageTypes.push(bots[i].bot.substring(start, end));
        let counter = {name: bots[i].bot.substring(start, end).replace('/', ''), times: 0};
        counters.push(counter);
    }
    counter = counters.find(counter => counter.name == bots[i].bot.substring(start, end).replace('/', ''));
    counter.times++;
}

// show results
console.log(counters);

// write results in json file
// let json = JSON.stringify(counters);
// fs.writeFile("task1.json", json, (err) => err && console.log(err));