const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');

// const text = 'This is a text.';
// fs.appendFileSync('./note.txt', text);

// console.log(process.argv[2]);

// yargs.command({
//   command: 'add',
//   describe: 'Add new item',
//   builder: {
//     title: {
//       describe: 'item title',
//       demandOption: true,
//       type: 'string',
//     },
//     body: {
//       describe: 'item body',
//       demandOption: true,
//       type: 'string',
//     },
//   },
//   handler: function (argv) {
//     console.log('Title: ' + argv.title);
//     console.log('Body: ' + argv.body);
//   },
// });

// yargs.parse();

const items = fs.readFileSync('./items.json');
const parsedData = JSON.parse(items);

console.log(parsedData);

parsedData.title = 'this is new title';
parsedData.body = 'this is new body';

fs.writeFileSync('./items.json', JSON.stringify(parsedData));
