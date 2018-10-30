const http=require('http');
const bl=require('bl');
const url = process.argv[2];
http.get(url,(res)=>{
    // res.on('data')
    res.pipe(bl((err,data)=>{
        if(err) return console.log(err);

        console.log(data.toString().length)
        console.log(data.toString())
    }))
}).on('error',console.error)
