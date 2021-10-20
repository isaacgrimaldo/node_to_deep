const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname,'templates');
const dirBuf = Buffer.from(dir, 'utf-8');

/**
 *  show all files on directoy;
 */

//sync way
const files =  fs.readdirSync(dirBuf ,{encoding:'utf-8'});
console.log(files);

//async way
fs.readdir(dirBuf ,{encoding:'utf-8'},(err, files) => {
    if (err) throw new Error(err);

    console.log(files);
})
