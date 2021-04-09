var movieName
//1. 引入express
const express = require('express');

//2. 创建应用对象
const app = express();

var bodyParser = require('body-parser')
//只要加入这个配置，在req请求对象上会多出来一个属性
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
//parse application/json
app.use(bodyParser.json())

//3. 创建路由规则
// request 是对请求报文的封装
// response 是对响应报文的封装
app.post('/server', (request, response) => {
    //设置响应头  设置允许跨域
    response.setHeader("Access-Control-Allow-Origin", "*");
    response.setHeader("Access-Control-Allow-Headers", '*');
    response.setHeader("Access-Control-Allow-Method", '*');
    movieName=request.body["movie name"]
    //设置响应体
    response.sendFile(__dirname + '/' + 'moviedetail.html');
});

//4. 监听端口启动服务
app.listen(8000, () => {
    console.log("服务已经启动, 8000 端口监听中....");
});