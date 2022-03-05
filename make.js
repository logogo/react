const path = require('path');
const fs = require('fs');

let componentSrc;
let SRC = 'component';
let com = {};
let BOOTJS = path.join(__dirname,SRC,'boot');
let bootSrc = fs.readFileSync(BOOTJS,'utf8');
fs.readdirSync(SRC).forEach(function(file){
  let _file = path.join(SRC,file);
  if(fs.lstatSync(_file).isDirectory()){
    let p = com;
    p[file]=path.join(__dirname,SRC,file)
  }
});
componentSrc = JSON.stringify(com,null,2);
let bootSrcJS = bootSrc.replace(/component/,componentSrc);
fs.writeFileSync(BOOTJS+'.js',bootSrcJS,'utf8')