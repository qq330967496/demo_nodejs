
var express = require('express');
var app = express();

var config_server = require('./config/server');
require('./controllers/apiController')(app);


// 静态资源
app.use(express.static('./web'));

// 监听
app.listen(config_server.port,config_server.host, function () {

    var host = config_server.host;
    var port = config_server.port;

    console.log("> 应用实例，访问地址为 http://%s:%s", host, port)

})