#!/usr/bin/node
const { argv } = require('process');
const myNumber = Number(argv[2]);
if (isNaN(myNumber)) { console.log('Not a number'); } else { console.log(`My number: ${myNumber}`); }
