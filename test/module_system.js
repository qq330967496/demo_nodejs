//模块系统，http://www.runoob.com/nodejs/nodejs-module-system.html

var Hello = require('./module/hello');
hello = new Hello();
hello.setName('BYVoid');
hello.sayHello();