const express = require('express');
const multer = require('multer');
const cors = require('cors');
const router=express.Router();


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'src/api/Files')
        console.log(req);
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

const upload = multer({storage}).array('file');

router.post('/upload', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            return res.status(500).json(err)
        }
        console.log(res);
        return res.status(200).json({ message: "success" });
        return res.status(200).send(res)
        
    })
    
});



module.exports = router;
