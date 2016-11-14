// 抓取教务信息

const fs      = require('fs')
const path    = require('path')
const charset = require('superagent-charset');
const request = require('superagent');
var cheerio = require('cheerio')
charset(request);

var data = []

request.get('http://202.113.80.18:7777/pls/wwwbks/qcb.table_browse?ctable=XK_SJDDB&ntable_type=1&ccolumns=*&cclauses=&nrow_min=1&nrow_max=10000')
  .charset('gbk')
  .end((err, res) => {
    var $ = cheerio.load(res.text)
    var trArr = $('tr')
    var trArrNum = trArr.length
    for (var i = 1; i < trArrNum; i++) {
      var tdArr = trArr.eq(i).find('td')
        data.push({
          "课程号": tdArr.eq(0).text(),
          "课程序号": tdArr.eq(1).text(),
          "星期": tdArr.eq(2).text(),
          "节次": tdArr.eq(3).text(),
          "学时": tdArr.eq(4).text(),
          "教室": tdArr.eq(6).text(),
        })
    }
    fs.writeFileSync(path.resolve(__dirname, 'data/1.json'), JSON.stringify(data))
  })
