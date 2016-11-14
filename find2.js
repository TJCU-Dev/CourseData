// 抓取教务信息

const fs      = require('fs')
const path    = require('path')
const charset = require('superagent-charset');
const request = require('superagent');
var cheerio = require('cheerio')
charset(request);

var data = []

request.get('http://202.113.80.18:7777/pls/wwwbks/qcb.table_browse?ctable=%B1%BE%D1%A7%C6%DA%BF%CE%B3%CC%B1%ED&ntable_type=1&ccolumns=%BF%CE%B3%CC%BA%C5%2C%CF%EA%CF%B8%D0%C5%CF%A2%2C%BF%CE%D0%F2%BA%C5%2C%BF%CE%B3%CC%D1%A7%B7%D6%2C%BF%CE%B3%CC%C3%FB%B3%C6%2C%BF%AA%BF%CE%CF%B5%2C%C8%CE%BF%CE%BD%CC%CA%A6%2C%C9%CF%BF%CE%B5%D8%B5%E3%2C%C9%CF%BF%CE%C8%D5%C6%DA%2C%C9%CF%BF%CE%BD%DA%B4%CE%2C%D6%D0%CE%C4%C9%CF%BF%CE%D6%DC%B4%CE%2C%B1%BE%BF%C6%C9%FA%BF%CE%C8%DD%C1%BF%2C%B1%BE%BF%C6%C9%FA%BF%CE%D3%E0%C1%BF%2C%D1%A1%BF%CE%CF%DE%D6%C6%CB%B5%C3%F7%2C%BF%BC%CA%D4%C0%E0%D0%CD&cclauses=&nrow_min=1&nrow_max=4000')
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
          "课程学分": tdArr.eq(3).text(),
          "课程名称": tdArr.eq(4).text(),
          "开课学院": tdArr.eq(5).text(),
          "任课教师": tdArr.eq(6).text(),
          "上课地点": tdArr.eq(7).text(),
          "上课日期": tdArr.eq(8).text(),
          "上课节次": tdArr.eq(9).text(),
          "考试类型": tdArr.eq(14).text(),
        })
    }
    fs.writeFileSync(path.resolve(__dirname, 'data/2.json'), JSON.stringify(data))
  })
