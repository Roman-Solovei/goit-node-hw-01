const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
} = require("./contacts");


function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      listContacts();
      break;

    case "get":
      getContactById(id);
      break;

    case "add":
      addContact(name, email, phone);
      break;

    case "remove":
      removeContact(id);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);


// invokeAction({action:'removeContact', id:'6'});

// getContactById('5').then(value => console.log(value));
// listContacts().then(value => console.log(value));







// const path = require('path');
// const contactsPath = path.join(__dirname, 'db', 'contacts.json');

// console.log(contactsPath)

//  addContact('asd', 'emai', '1232434')
// .then(value => console.log(value))
// listContacts()
// getContactById('1').then(value => console.log(value))
// removeContact('3')