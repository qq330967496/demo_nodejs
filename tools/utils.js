/**
 * Created by Sever on 2017/4/28.
 */


var utils = {
    //get请求
    get:function(app,path,cb){
        app.get(path, function (req, res) {
            res.header("Content-Type", "application/json;charset=utf-8");
            cb?cb(req, res):'';
        });
    },
    //post请求
    post:function(app,path,cb){
        app.post(path, function (req, res) {
            res.header("Content-Type", "application/json;charset=utf-8");
            cb?cb(req, res):'';
        });
    },
}

module.exports = utils;