const express = require('express');

const port = process.env.PORT || 3700;
const bodyParser = require('body-parser');
const path = require('path');

const dataController = require('./controller/data');

const app = express();
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'address.html'));
});
app.post('/', dataController.getElection);


app.listen(port);
