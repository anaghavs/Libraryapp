const express = require('express');
const app = express();
const nav = [{
        link: '/books',
        name: 'Books'
    },
    {
        link: '/authors',
        name: 'Authors'
    },
    {
        link: '/addauthor',
        name: 'Add Author'
    },
    {
        link: '/addbook',
        name: 'Add Book'
    },
    {
        link: '/signup',
        name: 'signup'
    },
    {
        link: '/login',
        name: 'login'
    }
];

const booksRouter = require('./src/routes/bookroutes')(nav)
const authorsRouter = require('./src/routes/authorroutes')(nav)
const signupRouter = require('./src/routes/signuproutes')
const loginRouter = require('./src/routes/loginroutes')
const newauthorRouter = require('./src/routes/newauthorroutes')
const newbookRouter = require('./src/routes/newbookroutes.js')


app.use(express.static('./public'));
app.set('view engine', 'ejs');
app.set('views', './src/views');
app.use('/books', booksRouter);
app.use('/authors', authorsRouter);
app.use('/signup', signupRouter);
app.use('/login', loginRouter);
app.use('/addauthor', newauthorRouter);
app.use('/addbook', newbookRouter);

app.get('/', function(req, res) {
    res.render("index", {
        nav,
        title: 'Library'


    });
});



app.listen(7000);