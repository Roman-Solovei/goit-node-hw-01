const fs = require('fs').promises;
const path = require('path');
const uuid = require('uuid');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');




async function listContacts(){
    try {
      const data = await fs.readFile(contactsPath, "utf8");
      const contacts = JSON.parse(data);
      console.table(contacts);
      return contacts;   
        
    }
    catch (error) {
        console.log(error);
    }
};


async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const neededContact = await contacts.filter((contact) => {
      return contact.id === contactId;
    });
    console.table(neededContact);
}
  catch (error) {
    console.log(error);
  }
};


async function addContact(name, email, phone) {
  const newContact = {
    id: uuid.v4(),
    name: name,
    email: email,
    phone: phone,
  };
  try {
    const allContacts = await listContacts();
    allContacts.push(newContact);  
    await fs.writeFile(contactsPath, JSON.stringify(allContacts), "utf8");
    console.table(allContacts)
  }
  catch (error) {
    console.log(error);
  }
};


async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const delContacts = await contacts.filter((contact) => {
      return contact.id !== contactId;
    });
    await fs.writeFile(contactsPath, JSON.stringify(delContacts), "utf8");
    console.table(delContacts);
  }
  catch (error) {
    console.log(error);
  }
};


module.exports = { listContacts, getContactById, removeContact, addContact };