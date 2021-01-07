const express = require('express');
const authorsRouter = express.Router();

function router(nav) {
    var authors = [{
            name: 'Joseph Barbera',
            book: 'Tom n Jerry',
            genre: 'Cartoon',
            img: "jb.jpg"
        },
        {
            name: 'JK Rowling',
            book: 'Harry Potter',
            genre: 'Fantasy',
            img: "jk.jpg"
        },
        {
            name: 'Paulo Coelho',
            book: 'The Alchemist',
            genre: 'Adventure',
            img: "paulo.jpg"
        },
    ]

    authorsRouter.get('/', function(req, res) {
        res.render("authors", {
            nav,
            title: 'Library',
            authors
        });
    });
    authorsRouter.get('/:id', function(req, res) {
        const id = req.params.id
        res.render('author', {
            nav,
            title: 'Library',
            author: authors[id]
        });
    });
    return authorsRouter;

}
module.exports = router;