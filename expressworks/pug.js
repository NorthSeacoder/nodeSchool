const express = require('express'),
    app = express(),
    port = process.argv[2],
    path = require('path');
require('pug');
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'templates'));
app.get('/home', (req, res) => {
    //path.join(__dirname, 'templates')
    res.render('index', {
        date: new Date().toDateString()
    })
});
app.listen(port)