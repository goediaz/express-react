const express = require('express');
const router = express.Router();
const data1 = require('../data/data.1.json');
const data2 = require('../data/data.2.json');
const data3 = require('../data/data.3.json');
const data4 = require('../data/data.4.json');
const data5 = require('../data/data.5.json');
const dataArray = [data1, data2, data3, data4, data5];

router.get('/data', (req, res) => {
  res.send(dataArray[getRandomInt(0,4)])
});

router.get('/update', (req, res) => {
  res.send(dataArray[getRandomInt(0,4)])
});

function getRandomInt(min, max) {
  const minimun = Math.ceil(min);
  const maximun = Math.floor(max);
  return Math.floor(Math.random() * (maximun - minimun + 1)) + minimun;
}

module.exports = router;