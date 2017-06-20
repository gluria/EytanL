var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.sendFile(__dirname + '/index.html');
});



/////////////////////////// ORIGINAL ////////////////////////////
/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

module.exports = router;
