const express = require('express');
const booksRouter = express.Router();

function router(nav) {
    var books = [{
            title: 'Tom n Jerry',
            author: 'Joseph BArbera',
            genre: 'Cartoon',
            img: "tom.jpg"
        },
        {
            title: 'Harry Potter',
            author: 'JK Rowling',
            genre: 'Fantasy',
            img: "har.jpg"
        },
        {
            title: 'The Alchemist',
            author: 'Paulo Coelho',
            genre: 'Adventure',
            img: "alc.jpg"
        },
    ]

    booksRouter.get('/', function(req, res) {
        res.render("books", {
            nav,
            title: 'Library',
            books
        });
    });
    booksRouter.get('/:id', function(req, res) {
        const id = req.params.id
        res.render('book', {
            nav,
            title: 'Library',
            book: books[id]
        });
    });
    return booksRouter;

}
module.exports = router;