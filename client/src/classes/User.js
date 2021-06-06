import { v4 as uuidV4 } from 'uuid'

export class User {
  constructor(name, email) {
    this.name = name
    this.email = email
    this.id = uuidV4()
    this.createdAt = new Date()
  }
}
