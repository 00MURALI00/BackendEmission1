var express = require('express');
var router = express.Router();
const executeColabFile = require('../src1/colab');

router.get('/executeFile', executeColabFile);

module.exports = router;
