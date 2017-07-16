import openSocket from 'socket.io-client';
const socket = openSocket('http://localhost:8000');

function subToTimer (interval, cb) {
  socket.on('timer', timestamp => cb(null, timestamp));
  socket.emit('subToTimer', 1000);
}

export { subToTimer }
