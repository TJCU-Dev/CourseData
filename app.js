// var XLSX = require('xlsx');
// var workbook = XLSX.readFile('./绘画1402.xls');
// console.log(workbook)
var d = require('./data/name.json')
var i = 0
for (key in d){
  i++
}
console.log(i)
