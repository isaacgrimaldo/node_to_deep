const fs =  require('fs');
const path = require('path');

const code = path.join( __dirname,'templates','findMaxandMix.js');
const codeContent = fs.readFileSync(code , {encoding:'utf-8'});

const newCode = path.join(__dirname, 'maxAndmin.js');
const newCode2 = path.join(__dirname, 'maxAndmin2.js');


//Async way
fs.open(newCode, 'w' , (err ,  fd ) => {
       if(err) throw new Error(err);

       fs.write(fd , codeContent , (err , written , data ) =>{
              if(err) throw new Error(err);
              
              console.log('maxAndmin.js was created');
       })

       fs.close(fd , e => {
            if(e) throw new Error(e);
           
            console.log('file closed successful!')
       });
});


// Sync way
const fd = fs.openSync(newCode2,'w');
fs.writeSync(fd , codeContent);
console.log('file maxAndmin2.js was created correctly');
fs.closeSync(fd);
