# CourseData
课程信息数据处理
---
数据来源
- 一个是公开的xls文件包含非选修的课程信息 和 上课的周数
- 教务系统的数据 缺乏 上课周数

把两者数据混合生成数据
----
教务系统的数据以获取
- `data/1.json`   1 和 2 都是课程信息
- `data/2.json`
- `data/name.json`  name  是全部课程号和名字的类型
---
公开的数据下载地址
- [2013 课程表](http://www.tjcu.edu.cn/attach/download/2016/07/12/91103.rar)
- [2014 课程表](http://www.tjcu.edu.cn/attach/download/2016/07/12/91104.rar)
- [2015 课程表](http://www.tjcu.edu.cn/attach/download/2016/07/12/91105.rar)
- [2016 课程表](http://www.tjcu.edu.cn/attach/download/2016/07/12/91142.rar)

每年都会更新 下载以后放到 文件根目录下 `source` 根据年份改成 20xx 例如: 2014
