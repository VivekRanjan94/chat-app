const io = require('socket.io')(5000, {
  cors: {
    origin: '*',
  },
})

io.on('connection', (socket) => {
  const id = socket.handshake.query.id
  socket.join(id)
})
