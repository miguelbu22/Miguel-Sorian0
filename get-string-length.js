const prompCreator = require('prompt-sync');

const prompt = prompCreator();

const myString = prompt('Enter a string: ');

console.log(myString);

let len = myString.length;

console.log('The length of the string is ' + len);

module.exports = {
  myString,
  len,
};
