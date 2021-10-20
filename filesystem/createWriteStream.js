const path = require('path');
const {createWriteStream ,  createReadStream } =  require('fs');

const codePath = path.join(__dirname, '/read.js');
const newCode =  path.join(__dirname, '/example.js');

const readStream = createReadStream(codePath);
const writeStream = createWriteStream(newCode);

// siple way
// readStream.pipe(writeStream);


readStream.on('data', (data) => {
   writeStream.write(data.toString(), (err) => {
       if(err) throw new Error(err);

       console.log('file create successful!');
   });
});

