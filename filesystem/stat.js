const fs = require("fs");
const path = require("path");

const file =  path.join(__dirname, 'flags.txt');

// help you to get the all file's information (sync);     
const statSync =  fs.statSync(file, 'bigint');
console.log(statSync); // show the information


// help you to get the all file's information (sync);     
const statAsync =  fs.stat(file , (err , info ) => {
     if(err) throw new Error(err);

     console.log(info);// show the information
});
