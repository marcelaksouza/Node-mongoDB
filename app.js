const http = require('http');

const server = http.createServer((request,response) => {
    console.log("New request");
});

server.listen(3000,'127.0.0.1',()=>{
    console.log('Application running on port',3000);
});