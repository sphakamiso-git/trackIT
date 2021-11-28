const http = require('http');
const fs = require('fs');
//const { isBuffer } = require('util'); I dunno what this is, but I will find out

const hostname = '127.0.0.1';
const port = 3000;

fs.readFile('index.html', (err,html)=> {
    if(err){
        throw err;
    }
//run the server
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/html');
    res.write(html);
    res.end();
});

server.listen(port, hostname, () => {
    console.log('Server started on port' + port);
});

});

