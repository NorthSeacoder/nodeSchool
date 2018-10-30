const  fs=require('fs');
//const line=fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;
const line=fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1
console.log(line)
