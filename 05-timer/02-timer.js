#!/usr/bin/node

console.log('start.....');

const timeID=setInterval(loop,1000);
timeID.unref();

function loop(){
  console.log('I will loop forever');
}

setTimeout(()=>{
  console.log('game over');
},5001)
