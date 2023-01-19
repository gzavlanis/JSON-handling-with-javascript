const data = require("./test.json");

// get messages for every element and create an array of them
const getContents = (item) => {
    return item.content;
};

const contents = data.map(getContents); // the array of content objects

// task 2
let foundStms = [];
let foundTotals = [];
for (let i = 0; i < contents.length; i++) {
    let start = contents[i].bot.indexOf("/");
    let end = contents[i].bot.lastIndexOf("#");
    if (JSON.stringify(foundTotals).indexOf(JSON.stringify(contents[i].d.live.total)) < 0) {
        if (contents[i].bot.substring(start, end).indexOf("bots") > 0){
            let stm = {stm: contents[i].d.stm, total: contents[i].d.live.total};
            foundStms.push(stm);
        }
    }
}

// show results
console.log(foundStms);