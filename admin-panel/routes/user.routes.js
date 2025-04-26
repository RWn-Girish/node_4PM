const express = require('express');
const { indexPage, getProductDetail } = require('../controller/user.controller');

const routes = express.Router();

routes.get("/", indexPage);
routes.get("/single-product/:id", getProductDetail);




module.exports = routes;