var express = require('express');
var router = express.Router();
var sqlserverdb = require('../public/js/sqlserverdb');

/* GET home page. */
router.get('/', function(req, res, next) {
  sqlserverdb.sql('SELECT * FROM Inventory WHERE quantity > 152',function(err,result){
    if (err) {
      console.log('连接失败', err);
      return;
    } else {
      console.log('连接成功')
    }
  });
  // console.log('connect sql server')
  res.send('connect sql server');
});

module.exports = router;