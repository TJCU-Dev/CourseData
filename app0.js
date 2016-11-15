const fs      = require('fs')
const path    = require('path')
var XLSX = require('xlsx');



fs.writeFileSync(path.resolve(__dirname, './output.json'), JSON.stringify(data))
