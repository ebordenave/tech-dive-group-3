var express = require('express');
var router = express.Router();
// var name router 
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('API is working properly!');
});

module.exports = router;
