const net = require('net');
const strftime = require('strftime');
const port = process.argv[2];
// console.log(port)
const server = net.createServer(socket => {
    const data = strftime('%F %R', new Date())
    socket.write(data+'\n');
    socket.end()

})
server.listen(port)