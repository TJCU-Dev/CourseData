const fs = require('fs')
const path = require('path')
const D = require('./data/3.json')

var list = {}
D.sort().forEach((d) => {
    list[d['上课周期']] = list[d['上课周期']] + 1 || 0
  })

var repair = (arr) => {
  var tmp = []
  arr.map((val) => {
    if (Number(val) > 0) tmp.push(val)
    if (val.indexOf('-') !== -1) {
      var l = Number(val.split('-')[0])
      var r = Number(val.split('-')[1])
      for (var i = l; i <= r; i++) {
        tmp.push(i.toString())
      }
    }
  })
  return tmp
}


for (var key in list) {
  var val = key.replace(/周上/, '').replace(/(\d学时)/, '').replace('()', '')
  var arr = val.split(',')
  list[key] = repair(arr)
}


fs.writeFileSync(path.resolve(__dirname, './data/week-arr.json'), JSON.stringify(list))
