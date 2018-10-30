const http = require('http');
const url = process.argv[2];
http.get(url,(res)=>{
    // console.log(res)
    // res.setEncoding('utf8');
    res.on('data',(data)=>{
        console.log(data.toString())
    })
    res.on('error',console.error)
}).on('error',console.error)