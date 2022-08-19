var xlsx = require("xlsx");
var fs = require("fs");
var path=require("path");
var sourceDir="\\Files";
const express=require('express');
const router=express.Router();
router.get('/combinedData', async(req,res)=>{
    const response=target();
    res.send(response);
})

function readFileToJson(){
   
    var wb =xlsx.readFile(`${__dirname}\\Files\\excel.xlsx`);
    // var wb=xlsx.readFile("../api/Files/excel.xlsx");
    var firstTabName=wb.SheetNames[0];
    var ws=wb.Sheets[firstTabName];
    var data=xlsx.utils.sheet_to_json(ws);
    return data;
    // console.log(data);
}

function target(){
    // var targetDir= __dirname+"\\Files";
    var targetDir= path.join(__dirname,sourceDir)
    var files = fs.readdirSync(targetDir);
    // return files;
//  var targetDir = path.join(__dirname,sourceDir); 
//  var files = fs.readdirSync(targetDir);

 var combinedData = [];

 files.forEach(function(file){
    var fileExtension = path.parse(file).ext;
    // console.log(fileExtension);
    if(fileExtension===".xlsx" && file[0] !== "~"){
         var fullFilePath = path.join(__dirname,sourceDir,file)
         var data=readFileToJson(fullFilePath);
         combinedData = combinedData.concat(data); 
         
    }
 }); 

var newWB=xlsx.utils.book_new();
var newWS=xlsx.utils.json_to_sheet(combinedData);
xlsx.utils.book_append_sheet(newWB,newWS,"Combined Data");
xlsx.writeFile(newWB,"newexcel.xlsx");
var newData=xlsx.utils.sheet_to_json(newWS);
// console.log(newData);
return newData;
}
module.exports=router;