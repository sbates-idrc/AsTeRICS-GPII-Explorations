var thrift = require('thrift');

var asapi = require('./gen-nodejs/AsapiServer.js');
var asapiTypes = require('./gen-nodejs/asapi_types.js');

var connection = thrift.createConnection('localhost', 9090);
var client = thrift.createClient(asapi, connection);

connection.on('error', function (err) {
    console.error(err);
});

client.GetModel(function (err, response) {
    if (err) {
        console.error(err);
    } else {
        console.log(response);
        connection.end();
    }
});
