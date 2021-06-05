export class Message {
  constructor(messageText, sender) {
    this.content = messageText
    this.sender = sender
    this.sentAt = new Date()
  }
}
