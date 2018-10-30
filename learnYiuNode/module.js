const fs = require('fs');


module.exports=function(dir,fe,cb){
    fs.readdir(dir, (err, list) => {
        if (err) return cb(err)
            // console.log(list,fe);
            const res = list.filter(item => item.includes(`.${fe}`))
            cb(null,res)
        
    })
}