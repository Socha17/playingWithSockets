const io = require('socket.io')();


io.on('connection', (client) => {
  // here you can start emmiting events to the client
    client.on('subToTimer', (interval) => {
      console.log("client is subscribing to timer with interval", interval);
      setInterval(() => {
        client.emit('timer', new Date());
      }, interval);
    });
});



const port = 8000;
io.listen(port);
console.log("listneing on port", port);
