//全局对象 http://www.runoob.com/nodejs/nodejs-global-object.html

//全局变量
console.log(__filename);//当前路径+文件名
console.log(__dirname);//当前路径

//全局对象
/*
 setTimeout
 clearTimeout
 setInterval
 */

//console对象
// console.log    ('日志');
// console.info   ('信息');
// console.error  ('错误');
// console.warn   ('警告');
// console.dir    ('检查');
// console.time   ('计时');
// console.timeEnd('计时');
// console.trace  ('调用日志');
// console.assert (1==2,'是否为真：结果错误');

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());




