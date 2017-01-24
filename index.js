"use strict";

const randomInt = require('random-int')
const wordElement = process.argv[2];
const fs = require('fs');
const bases = require('bases');

const computerElementsList = fs.readFileSync(__dirname + '/elements.txt').toString().split('\n');
//pick random element
const randomEnum = randomInt(0, computerElementsList.length);
const randomElement = computerElementsList[0];


const elementToNumber = bases.fromAlphabet(randomElement, '0123456789abcdefghijklmnopqrstuvwxyz');

if (elementToNumber.toString().length >= 6) {
  let color = elementToNumber.toString().substring(0,6)
  console.log(color + ' ' + randomElement )
  return color
}
