var express = require('express');
var expobj = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var mongoose = require('mongoose');


var db = require('./backendconfiguration/db');

var port = process.env.PORT || 8080;

expobj.use(bodyParser.json());
expobj.use(bodyParser.json({type: 'application/vnd.api+json'}));
expobj.use(bodyParser.urlencoded({ extended: true }));
expobj.use(methodOverride('X-HTTP-Method-Override'));
expobj.use(express.static(__dirname + '/public'));


expobj.listen(port);
console.log('\nNode Server has been started');
console.log('\nTo check it open any web browser and type "localhost:'+port+'" and see the magic')
exports = module.exports = expobj;

mongoose.connect('mongodb://localhost:27017/mydatabasename');
mongoose.connection.on('connected',function(){
    console.log('Connected to database mongodb @27017');
});
mongoose.connection.on('err',function(err){
    if(err){
        console.log('Error in database connection :'+err);
    }
});
mongoose.connection.on('disconnected',function(){
    console.log('Disconnected from mongoose db');
});
process.on('SIGINT',function(){
    console.log('Disconnected from databbse mongoDb using app termination');
    process.exit(0);
});
require('./backendapp/routes')(expobj);