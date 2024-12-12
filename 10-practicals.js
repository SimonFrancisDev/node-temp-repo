const os = require("os");
const { writeFileSync } = require('fs');

const userOs = os.userInfo();
const osFreeMem = os.freemem();
const osTotalMem = os.totalmem();
const osType = os.type();

const userDetials =  {
    userOs,
    osFreeMem,
    osTotalMem,
    osType
}

writeFileSync('./content/user-details.js', `let userInfo = ${JSON.stringify(userDetials.userOs)}
    let OsType =  ${JSON.stringify(userDetials.osType)}
`)