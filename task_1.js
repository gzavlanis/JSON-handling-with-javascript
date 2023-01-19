const data = require("./test.json");

// task 1
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

// show results
console.log('Message types: ' + messageTypes);
console.log(counters);