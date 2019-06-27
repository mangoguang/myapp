var express = require('express');
var router = express.Router();

console.log(123)
// var oracledb = require('oracledb')
// oracledb.getConnection({
//   connectString : "10.12.0.180",
//   user: "DL_READER",
//   password: "DL_READER"
// },function(err, connection) {
//   if (err) console.error('1122' + err.message);
//   console.log("连接成功123")
// });

// oracledb.getConnection({
//   user: 'DL_READER',
//   password: 'DL_READER',
//   connectString: '10.12.0.180'
// },
// function (err, connection) {
//   if (err) {
//     console.error(err.message);
//     return;
//   }
//   console.log('连接成功emmm')
//   connection.execute(
//   // "SELECT * from CRMTST where content_id=:id",
//   "SELECT * FROM siebel.CX_SURNAME",
//   [1521],  // bind value for :id
//   function (err, result) {
//     if (err) {
//       console.error(err.message);
//       return;
//     }
//     res.render('index', {title: '查询信息：' + JSON.stringify(result.rows)});
//   });
// });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
