var info = require('./lib').info;

console.log(info); // {name: 'cc'}
info.name = 'dd';
console.log(info); // {name: 'dd'}