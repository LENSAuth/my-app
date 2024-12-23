const express = require('express');
const app = express();
const port = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { message: 'Hello World!' });
});

app.post('/', (req, res) => {
    console.log('Got a POST request');
});

app.listen(port, () => {
    console.log(`LENS App listening at http://localhost:${port}`);
});