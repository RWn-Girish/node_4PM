const express = require("express");

const routes = express.Router();

routes.use("/user", require("./user.routes.js"))

module.exports = routes;