const http = require('http');
const fs = require('fs');

const server = http.createServer((request, response) => {
    if (request.url === '/') {
        response.write(
            '<html><body><form method="post" action="/process"> <input name="message" /></form></body>',
        );
        response.write('</html>');
        response.end();
    } else if (request.url === '/process' && request.method === 'POST') {
        const body = [];
        request.on('data', (chunk) => {
            body.push(chunk);
        });
        request.on('end', () => {
            console.log('stream finised');
            const parseBody = Buffer.concat(body).toString();
            const clientWriteStream = fs.createWriteStream('./client.txt');
            clientWriteStream.write(parseBody);
            response.write('thank you for submitting ');
            response.end();
        });
    } else {
        response.write('not found');
        response.end();
    }
});

server.listen(3001);
console.log('linsening on prot 3001');
