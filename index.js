const express = require("express");
const app = express();
// const port = 3000;


app.get('/',function(req,res){
    res.send("hello world");
});

var server = app.listen(port,function(){
    var host = server.address().address;
    var port = server.address().port

    console.log("expample app listining at http://%s:%s",host, port);
});