// var express = require('express');
// var router = express.Router();
// var oracledb = require('oracledb')

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   console.log('success')
//   oracledb.getConnection({
//     user: 'DL_READER',
//     password: 'DL_READER',
//     connectString: '10.12.0.180:1521/CRMTST'
//   },function(err, connection) {
//     if (err) {
//       console.log('连接oracle失败', err)
//     } else {
//       console.log('连接oracle成功')
//       connection.execute(
//       // "SELECT * from CRMTST where content_id=:id",
//       "SELECT LN_NUM FROM siebel.CX_SURNAME",
//       [],  // bind value for :id
//       function (err, result) {
//         if (err) {
//           console.error('查询失败', err.message);
//           return;
//         }
//         res.render('index', {title: '查询信息：' + JSON.stringify(result.rows)});
//       })
//     }
//   });
//   res.send('connect oracle');
// });

// module.exports = router;


var express = require('express');
var router = express.Router();
var oracledb = require('oracledb');

router.get('/', function(req, res, next) {
  var mypw = "DL_READER"  // set mypw to the hr schema password

  async function run() {

    let connection;

    try {
      connection = await oracledb.getConnection(  {
        user          : "DL_READER",
        password      : mypw,
        connectString : "10.12.0.180:1521/CRMTST"
      });

      let result = await connection.execute(
        `SELECT NAME, LN_NUM FROM siebel.CX_SURNAME`,
        [],  // bind value for :id
      );
      console.log('查询完成', result.rows);
    } catch (err) {
      console.error('查询失败', err);
    } finally {
      if (connection) {
        try {
          await connection.close();
        } catch (err) {
          console.error(err);
        }
      }
    }
  }

  run();
  res.send('connect oracle');
});

module.exports = router;
