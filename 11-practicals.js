const { readFileSync } = require("fs");
// const userInfo = require('./content/user-details');


const readFile = JSON.stringify(readFileSync('./content/user-details.js', 'utf8'));
console.log(readFile);

const user_info = JSON.parse(readFile);
console.log(user_info);


