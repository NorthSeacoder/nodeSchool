const express = require('express'),
    app = express(),
    port = process.argv[2],
    url = process.argv[3],
    path = require('path');
// path.join(__dirname, 'public')
app.use(express.static(url));
app.listen(port);