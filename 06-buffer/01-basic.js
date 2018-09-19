#!/usr/bin/node 
var buf1=new Buffer(256);
buf1[0]=0;
const log=console.log;
log('Buffer length:',buf1.length);
log('Buffer content：',buf1);


for(var i=0;i<256;i++){
  buf1[i]=i;
}
log('Buffer content:',buf1);


var buf2=buf1.slice(246,256);
log('Buffer last ten(buf2):',buf2);

buf2.fill(0);
log('buf2 content:',buf2);

var arr=['a',0xba,0xdf,0x00,255];
var buf3=new Buffer(arr);
log('\nbuf3 content:',buf3);

var  buf4=new Buffer('hello world','utf8');
log('\nbuf4 content:',buf4.toString(),buf4.length);

buf4.copy(buf3,0,0,buf3.length);
log('\nbuf3:',buf3.length,buf3.toString());


