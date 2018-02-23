const main = require('../src/main');
const Contact = main.Contact;
const AddressBook = main.AddressBook;

// AddressBook tests - first option
var adrianContact = new Contact('Adrian');
var addressBook = new AddressBook();
addressBook.addContact(adrianContact);
var errorMessage = 'Should return Adrian\'s contact';
// Passed test - should pint nothing to the console
console.log('--------Passed test--------');
console.assert(addressBook.getContact(0) === adrianContact, errorMessage);
// break the test
annieContact = new Contact('Annie');
// Failed test - should print the error message to the console
console.log('--------Failed test--------');
console.assert(addressBook.getContact(0) === annieContact, errorMessage);
