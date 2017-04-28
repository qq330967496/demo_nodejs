//API：http://www.runoob.com/nodejs/nodejs-event.html
var events = require('events');//事件模块
var emitter = new events.EventEmitter();//事件发射器（tm其实就是执行器）

emitter.on('someEvent', function(arg1, arg2) {//注册someEvent事件的监听器
    console.log('listener1', arg1, arg2);
});
emitter.on('someEvent', function(arg1, arg2) {//注册someEvent事件的第二个监听器
    console.log('listener2', arg1, arg2);
});
emitter.addListener('someEvent', function(arg1, arg2) {//添加监听器到someEvent事件的监听器数组尾部
    console.log('listener3', arg1, arg2);
});
console.log(emitter.listeners('someEvent'));

emitter.emit('someEvent', 'arg1 参数', 'arg2 参数');//3,2,1 发射！