const http = require("http");
const fs = require("fs");
const fileContent = fs.readFileSync("Forms.html");
//we are serving html file
const hostname = '127.0.0.1';
const port = 300;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(fileContent);
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});