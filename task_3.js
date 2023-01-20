const data = require("./test.json");
const fs = require('fs');

const getContents = (item) => {
    return item.content;
};

const contents = data.map(getContents); // the array of content objects

// task 3
let vlData = [];
let whistles = [];

for (let i = 0; i  < contents.length; i++) {
    let start = contents[i].bot.indexOf("/");
    let end = contents[i].bot.lastIndexOf("#");
    if (contents[i].bot.substring(start, end).indexOf("vlData") > 0) {
        if (contents[i].d.virtualSay != null) {
            if(whistles.indexOf(contents[i].d.virtualSay.whistle) < 0){
                whistles.push(contents[i].d.virtualSay.whistle);
                let bot = {bot: contents[i].bot, whistle: contents[i].d.virtualSay.whistle};
                vlData.push(bot);
            }
        }
    }
}

// show results
console.log(vlData);
console.log(whistles);

// write results in json file
// let json = JSON.stringify(vlData);
// fs.writeFile("task3.json", json, (err) => err && console.log(err));