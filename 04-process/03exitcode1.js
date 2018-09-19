#!/usr/bin/node
 
var code = process.argv[2];
if(process.argv.length<3){
   console.error( "请输入命令行参数！");
  process.exit(1);
}

if(typeof(code)==='undefined' || isNaN(Number(code))){
  console.error("命令行参数形式不正确！");
}
  process.exit(code);
