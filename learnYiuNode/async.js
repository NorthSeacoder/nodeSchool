const http = require('http');
const bl = require('bl');

const urls=process.argv.slice(2);
const res=[];
function getLine(url,index,res){
    http.get(url,result=>{
        result.setEncoding('utf8')
        result.pipe(bl((err,data)=>{
            if(err) return res[index] = err;
            res[index]=data
        }))
    })

}
urls.forEach((url,i)=>{
    getLine(url,i,res)
});
const intervalIndex=setInterval(()=>{
if(res.length===3){
    console.log(res.join('\n'));
    clearInterval(intervalIndex)
}
},500)

// console.log(process.argv.slice(2))