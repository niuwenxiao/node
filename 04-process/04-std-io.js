#!/usr/bin/node

const msg=['name','email','qq','mobile'];

var i=1,me={};
console.log(msg[0]+':');
process.stdin.on('data',(data)=>{
    var  cmd = 'me.'+msg[i-1]+'='+data.slice(0,data.length-1).toString('utf8')+'';
    eval(cmd);
    if  (i===4){
  console.log(me);
  process.exit();
}
else{
  console.log(msg[i++]+':');
}});
process.stdin.on('end',()=>{
  console.log(me);
})

