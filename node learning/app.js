const express = require('express');
const morgan = require('morgan');

//express app
const app = express();

// register view app
app.set('view engine', 'ejs');


// listen for requrest

app.listen(3000);

// logger
app.use(morgan('dev'));
app.use(morgan('tiny'));

//make files public
app.use(express.static('public'));

app.get('/', (req, res)=>{
    const blogs = [
        {title: "Yoshi finds eggs", snippet: "asdf ad fg r y yjtry t ytj  y rue u r q ty  ewt qretq rqer wer qw"},
        {title: "Mario finds stars", snippet: "asdf ad fg r y yjtry t ytj  y rue u r q ty  ewt qretq rqer wer qw"},
        {title: "How to defeat browser", snippet: "asdf ad fg r y yjtry t ytj  y rue u r q ty  ewt qretq rqer wer qw"},
    ]; 
    res.render('index', { title : "Home", blogs});
});


app.get('/about', (req, res)=>{
    res.render('about', { title : "About"});
});

app.get('/blog/create', (req, res) => {
    res.render('create', { title : "Create"});
});

//404 page

app.use((req, res) => {
    res.status(404).render('404', { title : "404"});
}); 