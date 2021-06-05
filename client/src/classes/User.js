import { Contact } from './Contact'

export class User {
  constructor(name, email, id) {
    this.name = name
    this.email = email
    this.contacts = []
    this.id = id
  }

  addContact(name, id) {
    this.contacts.push(new Contact(name, id))
  }
}
