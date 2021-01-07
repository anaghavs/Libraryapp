const express = require('express');
const newauthorRouter = express.Router();

newauthorRouter.get('/', function(req, res) {
    res.render("newauthor");
});

module.exports =newauthorRouter;