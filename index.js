const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const handleItems = require('./handleItems');

//#region old codes
// const text = 'This is a text.';
// fs.appendFileSync('./note.txt', text);

// console.log(process.argv[2]);

// const items = fs.readFileSync('./items.json');
// const parsedData = JSON.parse(items);

// console.log(parsedData);

// parsedData.title = 'this is new title';
// parsedData.body = 'this is new body';

// fs.writeFileSync('./items.json', JSON.stringify(parsedData));
//#endregion

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
    handleItems.addItem(argv.title, argv.body, Math.random());
  },
});

yargs.command({
  command: 'remove',
  describe: 'Remove item by title',
  builder: {
    title: {
      describe: 'item title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: (argv) => {
    handleItems.removeItemByTitle(argv.title);
    console.log('Item removed');
  },
});

yargs.parse();
