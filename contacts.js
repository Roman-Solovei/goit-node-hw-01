const fs = require('fs').promises;
const path = require('path');

const contactsPath = path.resolve('./db/contacts.json');


async function listContacts() {
 try {
     const data = await fs.readFile(contactsPath, 'utf8');
     console.table(data);
     return JSON.parse(data);
 } catch (error) {console.log(error);
     
 }
};


module.exports = { listContacts }