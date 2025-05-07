const express = require('express');

const port = 8001;
const app = express();
const dbConnect = require('./config/dbConnection');
const morgan = require('morgan');

// middleware
app.use(morgan('dev'));
app.use(express.urlencoded());
app.use(express.json());


//routes
app.use("/", require("./routes/index.routes"));


app.listen(port, () => {
    console.log(`Server start at http://localhost:${port}`);
});

/*
    POST - Create
    GET - Read
    PUT/PATCH - Update
    DELETE - Delete
*/