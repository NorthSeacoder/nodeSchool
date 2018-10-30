const port = process.argv[2],
    url = process.argv[3],
    http = require('http'),
    fs = require('fs');
// console.log(port, url);
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/plain'
    })
    let srcStream = fs.createReadStream(url);
    srcStream.pipe(res)
});
server.listen(port)