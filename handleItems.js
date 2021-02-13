const fs = require('fs');
const getItems = () => 'items...';

const addItem = (title, body, id) => {
  const items = loadItems();

  items.push({
    title: title,
    body: body,
    id: id,
  });

  saveItems(items);
};

const saveItems = (items) => {
  const jsonData = JSON.stringify(items);

  fs.writeFileSync('./items.json', jsonData);
};

const loadItems = () => {
  try {
    const buffer = fs.readFileSync('./items.json');
    const parsedData = JSON.parse(buffer.toString());
    return parsedData;
  } catch (error) {
    return [];
  }
};

module.exports = {
  getItems,
  addItem,
};
