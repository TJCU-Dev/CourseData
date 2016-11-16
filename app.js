var d2 = require('./data/2.json')
var d2new = require('./data/2-new.json')
var d3 = require('./data/3.json')
var xuanxiu_id = require('./data/xuanxiu_id.json')
var dirt = require('./data/week-arr.json')
const fs = require('fs')
const path = require('path')

console.log(d3.length)
console.log(d2.length)
console.log(d2new.length)

// console.log(d3.filter((s)=>{
// return  s['课程名']=='高级财务会计'&&s['任课老师']=='李伟'//&& s['大节']=='第2大节'&&s['上课地点']=='4号教学楼4-101'
// }
// ))
console.log(
  d2new.filter((ss)=>{
    if (ss['开课学院']=='教务处') return
    return ss['上课周期']==undefined
  }).length 
)

// fs.writeFileSync(path.resolve(__dirname, 'list.json'), JSON.stringify(d2new.filter((ss)=>{
//   return ss['上课周期']==undefined
// })))
