const data = require("./test.json");

// get messages for every element and create an array of them
const getContents = (item) => {
    return item.content;
};

const contents = data.map(getContents); // the array of content objects

// task 3
let vlData = [];

for (let i = 0; i  < contents.length; i++) {
    let start = contents[i].bot.indexOf("/");
    let end = contents[i].bot.lastIndexOf("#");
    if (contents[i].bot.substring(start, end).indexOf("vlData") > 0) {
        if (contents[i].d.virtualSay != null) {
            let bot = {bot: contents[i].bot, whistle: contents[i].d.virtualSay.whistle};
            vlData.push(bot);
        }
    }
}

// show results
console.log(vlData);