var mysql = require('mysql');
var connection = mysql.createConnection({
    port: 8000,
    host: 'localhost',
    user: 'root',
    password: '1111',
    database: 'gyms_db'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;