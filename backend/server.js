const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const { urlencoded } = require('body-parser');

require('dotenv').config();
const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname, '../build'));
app.use(urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build'));
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
