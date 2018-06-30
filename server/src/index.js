const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');

const questions = require("../db.json");



const app = express();

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors());

app.get('/', function (req, res) {
    console.log(questions)
    res.send(questions);
});

app.post('/', function(req, res) {
    const questions = req.body;
    console.log(questions)
    var writer = fs.createWriteStream('./db.json');
    writer.write(JSON.stringify(questions));
})

app.listen(3000, function () {});
