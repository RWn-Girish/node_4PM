const express = require('express');
const port = 8005;
const path = require('path');
const db = require('./config/dbConnection');
const app = express();
const cookieParser = require('cookie-parser');
const passport = require('passport');
const localStrategy = require("./config/passportStrategy");
const session = require("express-session");

// middleware
app.set("view engine", 'ejs');
app.use("/", express.static(path.join(__dirname, 'public')))
app.use("/uploads", express.static(path.join(__dirname, 'uploads')));
app.use(cookieParser());
app.use(express.urlencoded());

app.use(session({
    name: 'admin',
    secret: 'test',
    resave: true,
    saveUninitialized:false,
    cookie: {
        maxAge: 1000 * 60 * 60
    }
}));

app.use(passport.session());
app.use(passport.initialize());

// routes
app.use("/", require('./routes/index.routes'));


app.listen(port, ()=> {
    console.log('Server start at http://localhost:8005');
})