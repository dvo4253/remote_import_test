const fs = require('fs');

const express = require('express');

const app = express();

const port = 3000

app.use(express.static('public'))


app.get('/', function(req, res) { return res.sendFile(__dirname + '/index.html')});

app.listen(port, () => console.log(`System JS Test listening on port ${port}!`))