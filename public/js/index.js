

$('#getOrderList').click(function() {
  getOrderList()
})

function getOrderList() {
  let testTime1 = +new Date()
  $.ajax({
    type: 'GET',
    url: '/connectOracle',
    // data: { name: 'Zepto.js' },
    dataType: 'json',
    // timeout: 30000,
    context: $('body'),
    success: function(data){
      console.log(data)
      let testTime = +new Date() - testTime1
      console.log('数据库取数用时1：' + testTime)
      // let [result, nameList] = [[], '']
      // for (let i = 0; i < data.length; i++) {
      //   if (data[i][0].length >= 3) {
      //     result.push(data[i][0])
      //     nameList += `<li>${data[i][0]}</li>`
      //   }
      // }
      // $('.nameList').append(nameList)
      // console.log('结果：', result)
    },
    error: function(xhr, type){
      console.log('数据请求失败')
    }
  })
}