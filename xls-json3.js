const fs      = require('fs')
const path    = require('path')
var XLSX = require('xlsx');

fileList = []; // 获取全部 xls文件目录

function walk(path){
var dirList = fs.readdirSync(path);
dirList.forEach(function(item){
  if(fs.statSync(path + '/' + item).isDirectory()){
    walk(path + '/' + item);
  }else{
    fileList.push(path + '/' + item);
  }
});
}

walk('source');
// console.log(fileList)
var data = []

function jk(dir){

var workbook = XLSX.readFile(dir);
var $ = ['C','D','E','F','G','H','I'] // 周一到周七
for (var A in $){
  var date = workbook.Sheets.Sheet1[$[A]+3].v
  for (var i=1; i<12; i++ ){
    var kcm = workbook.Sheets.Sheet1[$[A]+(i*4)] != undefined ? workbook.Sheets.Sheet1[$[A]+(i*4)].v : ''
    var skdd = workbook.Sheets.Sheet1[$[A]+(i*4+1)] != undefined ? workbook.Sheets.Sheet1[$[A]+(i*4+1)].v : ''
    var rkls = workbook.Sheets.Sheet1[$[A]+(i*4+2)] != undefined ? workbook.Sheets.Sheet1[$[A]+(i*4+2)].v : ''
    var skzq = workbook.Sheets.Sheet1[$[A]+(i*4+3)] != undefined ? workbook.Sheets.Sheet1[$[A]+(i*4+3)].v : ''
    if (kcm==''&&skdd==''&&rkls=='') continue
    data.push({
      '课程名' : kcm,
      '上课地点' : skdd,
      '任课老师': rkls,
      '上课周期': skzq,
      '星期'   : date,
      '节次'  : i,
      '大节': tr(i)
    })
  }
}

}

function tr(i){
  var v =  i - Math.floor(i/2)
  return '第'+ v +'大节'
}

fileList.map((dir,i)=>{
  jk(dir)
})



console.log(data.length)

fs.writeFileSync(path.resolve(__dirname, './data/3.json'), JSON.stringify(data))
