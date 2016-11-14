const fs      = require('fs')
const path    = require('path')
var XLSX = require('xlsx');
var workbook = XLSX.readFile('./source/2014/绘画1402.xls');

var $ = ['C','D','E','F','G','H','I'] // 周一到周七
var data = {}
for (var A in $){
  console.log($[A])
  var name = workbook.Sheets.Sheet1[$[A]+3].v
  data[name] = []
  for (var i=3; i<52; i++ ){
     var val = workbook.Sheets.Sheet1[$[A]+i] != undefined ? workbook.Sheets.Sheet1[$[A]+i].v : ''
     data[name].push(val)
  }
}

fs.writeFileSync(path.resolve(__dirname, './output.json'), JSON.stringify(data))
