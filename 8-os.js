//1. os - gives us access to control the 
// os of our users
//2. path - gives use access through some
//method to look and manipulate a file
//3. fs - file system eneables devlopers to read
// and write file synchrounously and asynchrounously
// http - hyper text transfer protocol -
// and we use it handle sever request and response

 //*** 0S ***
 const os = require('os');
 const user = os.userInfo();
 console.log(user)

 console.log('username:',process.env.USERNAME || process.env.user)

 console.log(os.uptime());
console.log(os.type())
console.log(os.hostname())
console.log(os.machine());
console.log(os.totalmem());
console.log(os.freemem())