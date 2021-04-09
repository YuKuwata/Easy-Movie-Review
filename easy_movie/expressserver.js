var http = require('http');
var url = require('url');
var express = require('express');
var path = require("path");
var bodyParser = require('body-parser');
var mysql  = require('mysql');

var app = express()

var server = http.createServer(app);

let config = {
    host: 'localhost',
    user: 'root',
    password: 'wwwdesigncourse',
    database: 'www_course'
};

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'./')));

app.post('/add', function(req,res){
  let connection = mysql.createConnection(config);

  let sql = 'insert into reviews (title, movie, content) values (\'' + req.body.title + '\',\'' + req.body.movie + '\',\'' + req.body.content + '\')';

  connection.query(sql);

  connection.end();

  console.log("New review has been added");
  res.send("New review has been added")
})

server.listen(8081, function(){
  console.log("server is listening on port: 8081");
});
