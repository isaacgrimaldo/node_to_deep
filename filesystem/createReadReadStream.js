const path = require('path');
const {createReadStream, writeFileSync, read  } =  require('fs');

const pahtCode = path.join( __dirname, '/templates/findMaxandMix.js');

const readStream =  createReadStream(pahtCode ,{}/*Options*/);

//create the event emited
readStream.on('string', (data) => {
     console.log(data.toString());
})


// this method was handle for events
readStream.on('data', (data) => {
      const newPath = path.join( __dirname, '/templates/findMaxandMix2.js');
      writeFileSync(newPath , data.toString() , {flag:'a'} );

      //events emit 
      readStream.emit("string" , data);
})
