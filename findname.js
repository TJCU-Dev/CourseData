// 抓取教务信息

const fs = require('fs')
const path = require('path')
const charset = require('superagent-charset');
const request = require('superagent');
var cheerio = require('cheerio')
charset(request);

var data = {}

request.get('http://202.113.80.18:7777/pls/wwwbks/qcb.table_browse?ctable=CODE_KCB&ntable_type=1&ccolumns=*')
  .charset('gbk')
  .end((err, res) => {
    var $ = cheerio.load(res.text)
    var trArr = $('tr')
    var trArrNum = trArr.length
    console.log(trArrNum)
    for (var i = 1; i < trArrNum; i++) {
      var tdArr = trArr.eq(i).find('td')
      data[tdArr.eq(0).text()] = {
        "课程号": tdArr.eq(0).text(),
        "课程名": tdArr.eq(1).text(),
        "英文课程名": tdArr.eq(2).text(),
        "学历": tdArr.eq(5).text(),
        "学时": tdArr.eq(6).text(),
        "学分": tdArr.eq(7).text(),
        "课程类型": tdArr.eq(23).text(),
        "考试类型": tdArr.eq(38).text(),
      }

    }
    fs.writeFileSync(path.resolve(__dirname, 'data/name.json'), JSON.stringify(data))
  })
