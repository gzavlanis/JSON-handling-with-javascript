const data = require("./test.json");

// get messages for every element and create an array of them
const getContents = (item) => {
    return item.content;
};

const contents = data.map(getContents); // the array of content objects
const bots = contents.map(({ bot }) => ({ bot }));

//create groups of messages with counter
let messageTypes = [];
let counters = [];

for (let i = 0; i < bots.length; i++) {
    let start = bots[i].bot.indexOf("/");
    let end = bots[i].bot.lastIndexOf("#");
    if (messageTypes.indexOf(bots[i].bot.substring(start, end)) < 0) {
        messageTypes.push(bots[i].bot.substring(start, end));
        let counter = {name: bots[i].bot.substring(start, end), times: 0};
        counters.push(counter);
    }

    counter = counters.find(counter => counter.name == bots[i].bot.substring(start, end));
    counter.times++;
}

console.log('Message types: ' + messageTypes);
console.log(counters);

const getD = (item) => {
    return item.content.d;
};

const dElements = data.map(getD); // all d elements

let foundTotals = [];
let foundStms = [];

for (let i = 0; i < dElements.length; i++) {
    if (JSON.stringify(foundTotals).indexOf(JSON.stringify(dElements[i].live.total)) < 0) {
        foundTotals.push(dElements[i].live.total);
        foundStms.push(dElements[i].stm);
    }
}
console.log(foundTotals);
console.log(foundStms);

