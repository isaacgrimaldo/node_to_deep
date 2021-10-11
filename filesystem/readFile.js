/**
 *   With this method, not is necessary to open the file before, just you need to set the file's path 
 */

const fs = require('fs');
const path = require('path');

const file  =  path.join(__dirname , 'flags.txt');

//Async way
fs.readFile(file , {encoding:'utf-8'}, (err , data) => {
    if(err) throw new Error(err);
    
    console.log('content:' , data);
});


//Sync way 

 const content = fs.readFileSync(file,{encoding:'utf-8'});
console.log(content);
