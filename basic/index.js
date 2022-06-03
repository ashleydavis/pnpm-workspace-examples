const dayjs = require("dayjs");
const a = require("a"); 
const b = require("b"); 

console.log(`Today's date: ${dayjs().format()}`);

console.log(`From package a: ${a.getMessage()}`);
console.log(`From package b: ${b.getMessage()}`);