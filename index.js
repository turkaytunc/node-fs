const fs = require('fs');

const text = 'This is a text.';
fs.appendFileSync('./note.txt', text);
