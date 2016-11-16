const fs = require('fs')
const path = require('path')
var XLSX = require('xlsx');
var data = []
var data_id = {}
// var xx = require()
var key = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']


var workbook = XLSX.readFile('./source/2016-2017学年第一学期全校选修课课表.xls');

for (var i=3; i<91; i++){

   data_id[workbook.Sheets.Sheet1['B'+i].v] = {
     '序号': workbook.Sheets.Sheet1['A'+i].v,
     '课程号': workbook.Sheets.Sheet1['B'+i].v,
     '课程序号': workbook.Sheets.Sheet1['C'+i].v,
     '课程名称': workbook.Sheets.Sheet1['D'+i].v,
     '任课教师': workbook.Sheets.Sheet1['E'+i].v,
     '上课周期': workbook.Sheets.Sheet1['F'+i].v,
     '上课时间': workbook.Sheets.Sheet1['G'+i].v,
     '上课地点': workbook.Sheets.Sheet1['H'+i].v,
     '上课周期key': arrto(workbook.Sheets.Sheet1['F'+i].v)
   }
    data.push({
      '序号': workbook.Sheets.Sheet1['A'+i].v,
      '课程号': workbook.Sheets.Sheet1['B'+i].v,
      '课程序号': workbook.Sheets.Sheet1['C'+i].v,
      '课程名称': workbook.Sheets.Sheet1['D'+i].v,
      '任课教师': workbook.Sheets.Sheet1['E'+i].v,
      '上课周期': workbook.Sheets.Sheet1['F'+i].v,
      '上课时间': workbook.Sheets.Sheet1['G'+i].v,
      '上课地点': workbook.Sheets.Sheet1['H'+i].v,
      '上课周期key': arrto(workbook.Sheets.Sheet1['F'+i].v)
    })

}

function arrto(key){
  var tmp = []
  var val = key.replace(/周/, '')
  var arr = val.split('-')
  var l   = Number(arr[0])
  var r   = Number(arr[1])
  for (var i = l; i <= r; i++) {
    tmp.push(i.toString())
  }
  return tmp
}



fs.writeFileSync(path.resolve(__dirname, './data/xuanxiu.json'), JSON.stringify(data))
fs.writeFileSync(path.resolve(__dirname, './data/xuanxiu_id.json'), JSON.stringify(data_id))
