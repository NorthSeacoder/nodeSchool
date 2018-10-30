const http = require('http'),
    url = require('url'),
    port = process.argv[2];

function parsetime(query, res) {
    const date = new Date(query.iso);
    let json = {
        "hour": date.getHours(),
        "minute": date.getMinutes(),
        "second": date.getSeconds()
    };
    res.write(JSON.stringify(json));
    res.end()

};

function unixtime(query, res) {
    // console.log(query)
    const date = new Date(query.iso);
    let json = {
        "unixtime": date.getTime()
    };
    res.write(JSON.stringify(json));
    res.end()
};
const routerConfig = {
    '/api/parsetime': parsetime,
    '/api/unixtime': unixtime
}
const server = http.createServer((req, res) => {
    let {
        query,
        pathname
    } = url.parse(req.url, true);
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    console.log(pathname)
    routerConfig[pathname](query, res);

});
server.listen(port);