const prompCreator = require('prompt-sync');

const prompt = prompCreator();

const myString = prompt('Enter a string: ');

console.log("myString is '" + myString + "'");

let newString = myString.replace(/o/g, '0');


console.log("newString is '" + newString + "'");

module.exports = {
  myString,
  newString,
};
