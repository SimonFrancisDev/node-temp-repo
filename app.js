const __ = require('lodash');

const items = [1,[2,[3,[4]]]];

const newitem = __.flattenDeep(items);

console.log(newitem);