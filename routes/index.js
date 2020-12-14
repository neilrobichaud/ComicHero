var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//get id
router.get('/getId', function(req, res, next) {
  res.json(res.body);
});

module.exports = router;
