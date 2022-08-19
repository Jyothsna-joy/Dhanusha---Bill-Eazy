
const express = require('express');
const render = require('xlsx');


const file=render.readFile("./excel.xlsx");


const router=express.Router();

router.get('/getExcel',(req,res) => {
    const sheets=file.SheetNames;

    const data = [];
    for(let i=0; i<sheets.length;i++){
        const sheetname=sheets[i];

        const sheetData=render.utils.sheet_to_json(file.Sheets[sheetname]);

        sheetData.forEach((a)=>{
            data.push(a);
        });
    }
    res.send(data);
})
module.exports=router;