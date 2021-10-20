const fs =  require('fs');
const path = require('path');

//set the new path
const dir1 = path.join(__dirname, 'JS');
const dir2 = path.join(__dirname, 'CSS');


/**
 *  if the directoty exists the function will throw a Error
 */

//Async way
fs.mkdir(dir2, (err) =>{
     if(err) throw new Error(err);
      
     console.log('directoy created');
});


//create file
const templatePath = path.join(__dirname , '/templates/findMaxandMix.js');
const code = fs.readFileSync(templatePath , {encoding:'utf-8'});

//Sync way
fs.mkdirSync(dir1, 0o776);
fs.writeFileSync(`${dir1}/index.js`,code , {flag:'a'} )





