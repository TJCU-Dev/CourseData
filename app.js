var d2 = require('./data/2.json')
var d2new = require('./data/2-new.json')
var d3 = require('./data/3.json')
var xuanxiu_id = require('./data/xuanxiu_id.json')
var dirt = require('./data/week-arr.json')
const fs = require('fs')
const path = require('path')

var roomname = require('./教室使用次数.json')
var data = {}

for (var key in roomname){
var aaa =  jm(key)
if(aaa['楼']!=undefined){
  if(data[aaa['楼']]==undefined)  data[aaa['楼']]=[]
  data[aaa['楼']].push(aaa.房间)
}
}
console.log(data)
// 解析 上课地点信息
function jm(key){

  if(key.indexOf('号教学楼')!== -1){
    return {
      楼: key[0],
      房间: key.split('-')[1]
    }
  }

  if(key.indexOf('FIU')!==-1){
    return {
      楼: 'FIU',
      房间: key.replace('FIU','')
    }
  } //新实验楼

  if(key.indexOf('新实验楼')!==-1){
    return{
      楼: '新实验楼',
      房间: key.replace('新实验楼','')
    }
  }

  if(key.indexOf('圆厅教学楼厅')!== -1){
    return{
      楼: '圆厅教学楼厅',
      房间: key.replace('圆厅教学楼厅','')
    }
  }

  if(key.indexOf('阶梯教室阶')!== -1){
    return{
      楼: '阶梯教室阶',
      房间: key.replace('阶梯教室阶','')
    }
  }

  if(key.indexOf('号实验楼')!== -1){
    return{
      楼: key[0],
      房间: key.split('号实验楼')[1]
    }
  }

  return key
}


console.log(d3.length)
console.log(d2.length)
console.log(d2new.length)

// var data ={}
// d2new.map((s)=>{
//    data[s['上课地点']] = data[s['上课地点']]+1 || 0
// })




// console.log(d3.filter((s)=>{
// return  s['课程名']=='高级财务会计'&&s['任课老师']=='李伟'//&& s['大节']=='第2大节'&&s['上课地点']=='4号教学楼4-101'
// }
// ))
// console.log(
//   d2new.filter((ss)=>{
//     if (ss['开课学院']=='教务处') return
//     return ss['上课周期']==undefined
//   }).length
// )

fs.writeFileSync(path.resolve(__dirname, 'list.json'), JSON.stringify(data))
