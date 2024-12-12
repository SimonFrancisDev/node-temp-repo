const names = require('./4-names.js')
const sayHi = require('./5-ultils.js');
const { displayUserInfo } = require('./7-functions.js');
const {john, peter} = names;

sayHi(john)
sayHi(peter)

displayUserInfo();