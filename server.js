var express=require('express');
var app=express();

app.use(express.static(__dirname + "/public"));
app.use("/public/40/images", express.static(__dirname + '/public/40/images'));

app.listen(3000);
console.log("server running on port");