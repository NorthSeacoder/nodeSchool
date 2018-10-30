const fs = require('fs');
//const line=fs.readFileSync(process.argv[2]).toString().split('\n').length - 1;
fs.readFile(process.argv[2], 'utf8', (err, data) => {
    if (err) {
        console.log(err)
    } else {
        const line = data.split('\n').length - 1
        console.log(line)
    }
})