const data = require("./test.json");
const fs = require('fs');
const ld = require('lodash');

// get messages for every element and create an array of them
const getContents = (item) => {
    return item.content;
};

const contents = data.map(getContents); // the array of content objects

// task 2
let stms = [];
let totals = [];

for (let i = 0; i < contents.length; i++) {
    let start = contents[i].bot.indexOf("/");
    let end = contents[i].bot.lastIndexOf("#");
    if (contents[i].bot.substring(start, end).indexOf("bots") > 0){
        if (typeof contents[i].d.live.total != 'undefined') {
            let total = {h: contents[i].d.live.total.h, g: contents[i].d.live.total.g};
            totals.push(total);
            let stm = {stm: contents[i].d.stm, total: contents[i].d.live.total};
            stms.push(stm);
        }
    }
}   

// remove dublicates from stms array
const foundStms = stms.filter((stm, index) => {
    return index === stms.findIndex(obj => stm.total.h === obj.total.h && stm.total.g === obj.total.g);
});

// show results
console.log(foundStms);

// write results in json file
//let json = JSON.stringify(foundStms);
//fs.writeFile("task2.json", json, (err) => err && console.log(err));