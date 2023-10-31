const http = require('http');
const fs = require('fs');

// request only use for read streaming and response only use for write streaming
const server = http.createServer((req, res) => {
    const myReadStream = fs.createReadStream('./bigdata.txt');
    const myWriteStream = fs.createWriteStream('./mytext.txt');
    myReadStream.pipe(myWriteStream);
    myReadStream.pipe(res);
});

server.listen(3002);
console.log('serve running on 3002...');
