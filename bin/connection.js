var mysql      = require('mysql');
var config_db = require('../config/database');


//
// var database = function(){
//
//     connection.connect();
//
//     connection.query('select * from tbl_test', function (error, results, fields) {
//         if (error) throw error;
//         console.log(results[0]);
//     });
// }

//连接mysql
console.log('> 连接mysql：http://%s:%s/%s',config_db.mysql.host,config_db.mysql.port,config_db.mysql.database);
var connection = mysql.createConnection(config_db.mysql);

module.exports =  connection;