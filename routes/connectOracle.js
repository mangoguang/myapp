var express = require('express');
var router = express.Router();
var oracledb = require('oracledb');

router.get('/', function(req, res, next) {
  var obj = {}
  var config = {
    user: 'DL_READER',
    password: 'DL_READER',
    connectString: '10.12.0.74:1521/DRCRMDB'
  }

  async function run() {
    let testTime1 = +new Date()
    let connection;
    console.log('开始连接数据库')
    try {
      connection = await oracledb.getConnection(  {
        user          : config.user,
        password      : config.password,
        connectString : config.connectString
      });
      console.log('连接数据库成功。')
      let result = await connection.execute(
        `SELECT * FROM siebel.View_SalesOrderDetail`,
        // `SELECT NAME, LN_NUM FROM siebel.CX_SURNAME`,
        [],  // bind value for :id
      );
      console.log('取数成功。')
      let testTime = +new Date() - testTime1
      console.log('数据库取数用时：' + testTime)
      obj = result.rows
      // console.log('查询完成', result.rows);
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

  run().then(() => {
    res.send(obj.slice(3))
    // res.render('getName', { name: 'oracle' });
  })
});

module.exports = router;
