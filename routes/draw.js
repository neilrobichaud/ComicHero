var express = require('express');
var router = express.Router();


/* GET draw screen page. */
router.get('/', function(req, res, next) {
  res.render('draw', { title: 'Draw' });
});

router.post('/drawing', function(req, res) {
  var image = req.body.img;
  res.end("yes");
});
module.exports = router;
