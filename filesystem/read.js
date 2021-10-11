/**
 *   fd = file id
 *   Buffer = raw data 
 *   offset = set where the document will start reading
 *   legth = until where you want to read the file (fileSizes to read whole file)
*/

const fs = require('fs');
const path = require('path');

const file =  path.join(__dirname , 'flags.txt');
const fileSiez = fs.statSync(file).size; // getting the file's size
const newBuffer = new Buffer.allocUnsafe(fileSiez);


 // Async way
fs.open(file , 'r' , ( err , fd ) => {
      if(err) throw new Error(err);
      
      fs.read(fd , newBuffer , 0 , fileSiez , 0 , (err ,  bytes) => {
           if(err) throw new Error(err);
           
           console.log('bytes: ',  bytes); //show the file's sizes
           console.log('content: ' ,  newBuffer.toString()); //show the new information saved in the Buffer
      });
       
      fs.close(fd , e => {
        if(e) throw new Error(e);
         
        console.log('file closed successful!')
      });
});


// Sync way
const fd =  fs.openSync(file , 'r');
const bytes = fs.readSync(fd , newBuffer , 0 , fileSiez , 0 );
console.log('bytes: ',  bytes); //show the file's sizes
console.log('content: ' ,  newBuffer.toString()); //show the new information saved in the Buffer
fs.closeSync(fd);
