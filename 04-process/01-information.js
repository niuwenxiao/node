#!/usr/bin/node

console.log('architecture:',process.arch);
console.log('platform:%s\n',process.platform);
console.log('process id:',process.pid);
console.log('exePath:%s\n',process.execPath);

console.log('node version:',process.version);
console.log('user id',process.getuid());
console.log('group id:',process.getuid());
console.log('cwd:%s\n',process.cwd());

console.log('rss:',process.memoryUsage().rss);
console.log('heapTotal:',process.memoryUsage().heapTotal);
console.log('heapUsed:',process.memoryUsage().heapUsed);
console.log('external:%s\n',process.memoryUsage().external);

console.log('env:',process.env);
console.log('host name:',process.env.HOSTNAME);
