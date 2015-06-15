var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource: ' + req.headers.testheader);
});

router.get('/:id', function(req, res, next) {
  res.send(req.params.id);
});

router.post('/save', function(req, res, next) {
  res.send('respond with a resource: ' + req.body.favoritePlace);
});

module.exports = router;
