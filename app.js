const http = require('http');
const userController = require("./controllers/userController");
const port = process.env.PORT || 3000;

const server = http.createServer((req,res) => {
    let path = req.url;
    console.log(path,req.method)
    // can be done with if statement
    switch(req.method){
        case "GET":
            if (req.url === "/api/users") {
                userController.getUser(req,res);
                break;
            } else {
                userController.getUserID(req,res);
                break;
            }
            
        case "POST":
            if (req.url === "/api/users") {
                userController.createUser(req,res);
                break;
            }   
        case "PUT":
            if (req.url === "/api/users") {
                userController.updateUser(req,res);
            break;
            } 
            
        case "DELETE":
            if (req.url === "/api/users") {
                userController.deleteUser(req,res);
            break;
            } 
            
        default:
            res.writeHead(404,{"content-type":"application/json"});
            res.end(
                JSON.stringify({ user: "Not found",message: "Route not found" })
            );
    }
    res.end();
});

server.listen(port,'127.0.0.1',()=>{
    console.log(`Application running on port ${port}`);
});