const express = require('express');

const port = 8001;

const server = express();

server.set("view engine", "ejs");

server.get("/", (req, res)=> {
    res.render('index')
});

server.get("/about", (req, res)=> {
    res.render('about')
});



server.listen(port, ()=> {
    console.log(`Server start at http://localhost:${port}`);
})