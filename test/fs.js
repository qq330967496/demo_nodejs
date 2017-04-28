//文件系统 http://www.runoob.com/nodejs/nodejs-fs.html
var fs = require("fs");

// 异步读取
fs.readFile('./test/input.txt', function (err, data) {
    if (err) {
        return console.error(err);
    }
    console.log("异步读取: " + data.toString());
});

// 同步读取
var data = fs.readFileSync('./test/input.txt');
console.log("同步读取: " + data.toString());

console.log("程序执行完毕。");