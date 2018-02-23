const main = require('../src/main');
const expect = require('chai').expect;
const Contact = main.Contact;
const AddressBook = main.AddressBook;

// AddressBook tests - third option
describe('Address Book', function() {
  var addressBook;
  var contact;

  beforeEach(function() {
    addressBook = new AddressBook();
    contact = new Contact('Joseph');
  });

  it('Address book should be able to add a contact', function() {
    addressBook.addContact(contact);
    expect(addressBook.getContact(0)).to.deep.equal(contact);
  });

  it('Address book should be able to delete a contact', function() {
    addressBook.deleteContact(contact);
    expect(addressBook.getContact(0)).to.be.undefined;
  });
});


