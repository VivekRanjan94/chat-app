import { Message } from './Message'

export class Contact {
  constructor(name, id) {
    this.name = name
    this.id = id
    this.conversation = []
  }

  appendMessage(messageText, sender) {
    this.conversation.push(new Message(messageText, sender))
  }
}
