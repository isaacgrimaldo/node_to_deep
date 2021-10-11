const fs =  require('fs');
const path = require('path');

const newfile = path.join(__dirname , 'hi.js');
const newfile2 = path.join(__dirname , 'hi2.js');

/**
 *  check the flags file to see the flags that you can use 
 */


// create or open files (async)
fs.open( newfile , /*flag*/'w', (err,  doc ) =>{
      if(err) throw new Error(err);
      console.log(doc);  
      console.log('file created successful!!');
      fs.close( doc  , e => {
            if(e) throw new Error(e);
            
            console.log('file closed successful!!!');
      }); 
})

// create or open files (async)
const fd =  fs.openSync(newfile2,'w');
fs.closeSync(fd);