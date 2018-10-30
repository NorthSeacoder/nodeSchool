const port = process.argv[2],
    map = require('through2-map'),
    http = require('http');
const server = http.createServer((req, res) => {
    if (req.method !== 'POST') {
        return res.end('send me a POST\n')
    }
    req.pipe(map(chunk => chunk.toString().toUpperCase())).pipe(res)
});
server.listen(port)