const fs = require('fs');
const chalk = require('chalk');

const text = 'This is a text.';
fs.appendFileSync('./note.txt', text);
