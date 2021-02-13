const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');

// const text = 'This is a text.';
// fs.appendFileSync('./note.txt', text);

// console.log(process.argv[2]);

yargs.command({
  command: 'add',
  describe: 'Add new item',
  builder: {
    title: {
      describe: 'item title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'item body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    console.log('Title: ' + argv.title);
    console.log('Body: ' + argv.body);
  },
});

yargs.parse();
