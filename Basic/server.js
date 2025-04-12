// core => http, fs

const http = require("http");
const fs = require('fs');

const requesthandler = (req, res) => {
    // res.write("Welcome to Server");
    // res.end();

    // console.log(req.url);

    let filePath;
    switch(req.url){
        case "/":
            filePath = "./index.html"
            break;
        case "/about":
            filePath = "./about.html"
            break;
        case "/contact":
            filePath = "./contact.html"
            break;
        default:
            filePath = "./notFound.html";
            break;
    }
    fs.readFile(filePath, (err,result)=> {
        res.end(result);
    })
}

const server = http.createServer(requesthandler)  // server create
const port = 8000;


server.listen(port, ()=> {
    console.log(`Server Start at http://localhost:8000`);
})