var d2 = require('./data/2.json')
var d3 = require('./data/3.json')
var dirt = require('./data/week-arr.json')
const fs = require('fs')
const path = require('path')
var data = []


var weekdirt = {
  '星期1':'星期一',
  '星期2':'星期二',
  '星期3':'星期三',
  '星期4':'星期四',
  '星期5':'星期五',
  '星期6':'星期六',
  '星期7':'星期日',
}

var dd = require('./list.json')

function wkdirt(arr){
  var tmp=[]
  arr.map((r)=>{
    tmp.push(dirt[r])
  })
  return tmp
}

data = dd.filter((ss)=>{
  // try{
  //   ss['上课周期key']= wkdirt(ss['上课周期'])
  // }catch(e){
return ss['上课周期']==undefined

  // }

})


// console.log(d3.length)
// console.log(d2.length)
// var numi = 0
//
//
// d2.map((a2, i2)=>{
//    d3.map((a3, i3)=>{
//     var q1 = a2['课程名称'].replace(' ', '')  == a3['课程名'].replace(' ', '')
//     var q2 = a2['任课教师'].replace(' ', '')  == a3['任课老师'].replace(' ', '')
//     var q3 = a2['上课地点'].replace(' ', '')  == a3['上课地点'].replace(' ', '')
//     var q4 = a2['上课节次'].replace(' ', '')   == a3['大节'].replace(' ', '')
//     var q5 = weekdirt[a2['上课日期'].replace(' ', '')]  == a3['星期'].replace(' ', '')
//
//       if(q1&&q2&&q2&&q4&&q5){
//         numi++;
//         console.log(numi)
//         if(a2['上课周期']==undefined) a2['上课周期'] =[]
//         a2['上课周期'].push(a3['上课周期'])
//
//       }
//
// })
// data.push(a2)
// })
//





fs.writeFileSync(path.resolve(__dirname, './data/2-new.json'), JSON.stringify(data))
