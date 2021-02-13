const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');

// const text = 'This is a text.';
// fs.appendFileSync('./note.txt', text);

// console.log(process.argv[2]);

yargs.command({
  command: 'add',
  describe: 'Add new item',
  handler: function () {
    console.log('New Item Added!');
  },
});

console.log(yargs.argv);
