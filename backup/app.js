var express=require('express');
var fs = require('fs');
var path = require('path');

var app=express();

app.use(express.static(path.resolve(__dirname, './dist')))
app.use('/public',express.static(path.resolve(__dirname, './public')))


app.get('*', function(req, res) {
    const html = fs.readFileSync(path.resolve(__dirname, './dist/index.html'), 'utf-8')
    res.send(html)
})


console.log("正在监听8082端口......");
app.listen(8082);