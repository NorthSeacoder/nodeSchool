const myModule=require('./module');
const dir = process.argv[2];
const fe = process.argv[3];
myModule(dir,fe,(err,data)=>{
    if(err) return console.log(err);
    console.log(data.join('\n'))
})
