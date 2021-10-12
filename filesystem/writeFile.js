const fs =  require('fs');
const path = require('path');

const file = path.join(__dirname, 'writeFile.txt');
const data = 'Hola  TODO COMO ESTAN \n';
const buff = new Buffer.from('12346513213126+65+6598', 'utf-8');

// Sync way
fs.writeFileSync(file, data,{flag:'a'});

//Async way
fs.writeFile(file, buff,{flag:'a'},(err, data) => {
     if(err) throw new Error(err);
     
    console.log('done');
})

