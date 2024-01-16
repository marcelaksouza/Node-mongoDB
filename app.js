const http = require('http');
const getReq = require("./methods/get-request");
const postReq = require("./methods/post-request");
const putReq = require("./methods/put-request");
const deleteReq = require("./methods/delete-request");
let users = require("./data/users.json");
const port = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    let path = req.url;
    req.user = user;
    switch(req.method){
        case "GET":
            getReq(req,res);
            break;
        case "POST":
            postReq(req,res);
            break;
        case "PUT":
            putReq(req,res);
            break;
        case "DELETE":
            deleteReq(req,res);
            break;
        default:
            res.statusCode = 404;
            res.setHeader("content-type","application/json");
            res.write(
                JSON.stringify({ user: "Not found",message: "Route not found" })
            );
    }
    res.end();
});

server.listen(port,'127.0.0.1',()=>{
    console.log(`Application running on port ${port}`);
});