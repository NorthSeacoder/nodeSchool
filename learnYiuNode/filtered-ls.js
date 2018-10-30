const fs = require('fs');
const dir = process.argv[2];
const fe = `.${process.argv[3]}`;
fs.readdir(dir, (err, list) => {
    if (err) {
        console.log(err);
    } 
        // console.log(list,fe);
        const res = list.filter(item => item.includes(fe))
        console.log(res.join('\n'))
    
})