const express = require('express');
const newbookRouter = express.Router();

newbookRouter.get('/', function(req, res) {
    res.render("newbook");
});


module.exports =newbookRouter;