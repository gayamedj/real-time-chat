const app = require('express')();
const server = require('http').createServer(app)
const io = require('socket.io')(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (socket) => {

    console.log('A utilisateur s\'est connecté')

    socket.on('disconnect', () => {
      console.log('Un utilisateur s\'est déconnecté')
    });

    socket.on('chat message', (msg) => {
      const date = new Date()
      console.log(`Nouveau message : ${msg + ' - Envoyé a ' + date.getHours() + ':' + date.getMinutes()}`)
    })

});

// Démarrer le serveur
server.listen(3000, () => {
  console.log(`Notre application Node est démarré sur http://localhost:3000`)
})