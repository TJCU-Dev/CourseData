# CourseData
课程信息数据处理
---
安装依赖: `npm install` or `yarn`

---
数据来源
- 一个是公开的xls文件包含非选修的课程信息 和 上课的周数
- 教务系统的数据 缺乏 上课周数

把两者数据混合生成数据
----

教务系统的数据以获取

生成路径
- `find1.js`  => `data/1.json`
- `find2.js`  => `data/2.json`
- `xls-json3.js`  => `data/3.json`
- `findname.js`  => `data/name.json`
- `week-arr.js`= `data/3.json` => `data/week-arr.json`


- `data/1.json`   1 和 2 都是课程信息
- `data/2.json`
- `data/3.json`   3 是xls数据解析出来的全部数据
- `data/name.json`  name  是全部课程号和名字的类型
- `data/week-arr.json`   由 `3.json` 处理出来的不同时间段对应的 上课周数组 从第1周到18周
- `data/week-num.json`   处理是出来的一些数据觉得可能有用就留下来了 对应的是 同一个周的课程
- `data/2-new.json`  最终完成数据 一共 `3694` 条 目前 `82` 条数据没有找到对照 `10` 条 网络选修没有数据  

---
公开的数据下载地址
### 2016年-2017年 秋季 数据时间
- [2013 课程表](http://www.tjcu.edu.cn/attach/download/2016/07/12/91103.rar)
- [2014 课程表](http://www.tjcu.edu.cn/attach/download/2016/07/12/91104.rar)
- [2015 课程表](http://www.tjcu.edu.cn/attach/download/2016/07/12/91105.rar)
- [2016 课程表](http://www.tjcu.edu.cn/attach/download/2016/07/12/91142.rar)
- [选修课课表](http://www.tjcu.edu.cn/attach/download/2016/07/11/91046.xls)

每年都会更新 下载以后放到 文件根目录下 `source` 根据年份改成 20xx 例如: 2014

---

### 数据库导入支持
---
#### moogodb
> 修改 `moogose.js` 服务器地址 和 表名

>执行 `node moogose`

数据会添加到你的数据库



---
## License

Copyright (c) 2016 TJCU

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
