//#region Contact Class
const Contact = function (name) {
  this.name = name;
}
//#endregion Contact Class

//#region AddressBook Class
const AddressBook = function () {
  this.contacts = [];
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
};

AddressBook.prototype.getContact = function(index) {
  return this.contacts[index];
};

AddressBook.prototype.deleteContact = function(contact) {
  const index = this.contacts.indexOf(contact);
  return this.contacts.slice(index, 1);
};
//#endregion AddressBook Class

module.exports = {
  Contact: Contact,
  AddressBook: AddressBook
};

