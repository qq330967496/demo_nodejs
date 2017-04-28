/**
 * Created by Sever on 2017/4/28.
 */

// 创建 application/x-www-form-urlencoded 编码解析
var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
// 自定义模块
var connection = require('../bin/connection');
connection.connect();
var utils = require('../tools/utils');

// 根目录名称
var root = 'api';

module.exports = function(app){

    utils.get(app,reqPath('/getData'),function(req, res){
        connection.query('select * from tbl_test', function (error, results, fields) {
            resData(error,results,res);
        });
    });

    utils.post(app,reqPath('/postData'),function(req, res){
        connection.query('select * from tbl_test', function (error, results, fields) {
            resData(error,results,res);
        });
    });
};

// 请求路径
var reqPath = function(url){
    return '/'+root+url;
}

// 响应数据
var resData = function(error,results,res){
    // if (error) throw error;
    error?console.log(error):'';
    console.log(results);

    var data = {
        code:0,
        data:{

        },
        msg:'success',
    };

    if(results){
        data.data = results;
    }else{
        if(error.code == 'ER_NO_SUCH_TABLE'){
            data = {
                code:'500',
                data:'',
                msg:'没有该表'
            }
        }
    }

    res.end(JSON.stringify(data));
}