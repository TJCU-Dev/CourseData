var data = require('./data/2-new.json')
var mongoose = require('mongoose'); //引用mongoose模块
var db = mongoose.createConnection('127.0.0.1', 'test'); //创建一个数据库连接
db.on('error',console.error.bind(console,'连接错误:'));
 db.once('open',function(){
   //一次打开记录
   console.log('ok')
 });
var CourseInformationSchema = new mongoose.Schema({
  课程号: String,
  学分: String,
  名称: String,
  学院: String,
  教师: String,
  地点: Array,
  星期: String,
  节次: String,
  楼: String,
  房间: String,
  周期: Array
});
var CourseInformationModel = db.model('CourseInformation', CourseInformationSchema);



data.map((d,i)=>{
    new CourseInformationModel({
      课程号: d['课程号'],
      学分: d['课程学分'],
      名称: d['课程名称'],
      学院: d['开课学院'],
      教师: d['任课教师'].replace(' ',''),
      地点: jm(d['上课地点']),
      星期: jweek(d['上课日期']),
      节次: jsection(d['上课节次']),
      周期: d['上课周期key'],
      楼: jm(d['上课地点'])['楼'] || '',
      房间: jm(d['上课地点'])['房间'] || '',
    }).save(()=>{
        console.log(i)
    })
})


// 解析节次
function jsection(section){
  if(section.indexOf('大节')!==-1){
    return section[1]
  }else{
    console.log('解析节次错误')
    return 0
  }
}

// 解析星期几
function jweek(date){
  var  d = date[2] || 0
  var reg = new RegExp("^[0-9]*$");
  if(!reg.test(d)){
      console.log('解析星期错误')
      return 0
  }
  return d
}

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
