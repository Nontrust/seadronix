var express = require('express');
var app = require('../app');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('video', { title: 'seadronix-first task' });
  });

module.exports = router;
