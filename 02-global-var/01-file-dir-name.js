#!/usr/bin/node

console.log('filename:',__filename);
console.log('dirname:',__dirname);

const path=require('path');
fileName=path.join(__dirname,'views','view.html');
console.log('fileName:',fileName);
