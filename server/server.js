const path = require("path");
const express = require("express");
const app = express();
var app_path = '../dist/imageEC18A005'
const Port = process.env.PORT || 4200 
console.log(path.join(__dirname,app_path))
app.use(express.static(path.join(__dirname,app_path)));
app.get('/*', function(req,res){
res.sendFile(path.join(__dirname, app_path,'/index.html'))
});
app.listen( Port , ()=>{
    console.log(`Listening on ${Port}`)
});