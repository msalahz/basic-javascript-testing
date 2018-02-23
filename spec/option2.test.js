const main = require('../src/main');
const Contact = main.Contact;
const AddressBook = main.AddressBook;

// AddressBook tests - second option
function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('PASSED');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

function testGetContactByIndex() {
  var contact = new Contact('Dan');
  var addressBook = new AddressBook();
  addressBook.addContact(contact);
  // break the test
  //contact = new Contact('Mark');
  var actual = addressBook.getContact(0);
  var expected = contact;
  assertEqual(actual.name, expected.name, 'Should return Dan\'s contact');
}
// invoke test function
testGetContactByIndex();