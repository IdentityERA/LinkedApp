const express = require('express');
const router = express.Router();
const fileModel = require("../Models/image");
const path = require("path");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: "./uploads",
    filename: function(req, file, cb) {
        cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: {fileSize: 1000000},
}).single("myfile")


const obj = (req,res,next) => {
    try {
        upload(req, res, () => {
            next();
        })
    }catch(error) {
        console.log(error);
    }
}

router.post("/file-upload", obj, async (req,res)=>{
    try {     
        const file = new fileModel();
        file.path = req.file.path;
        await file.save()
        res.send({
            message: "Profile updated successfully",
            data: null,
            success: true,
          });
    } catch (error) {
        res.send({
            message: "Profile updation failed",
            data: error,
            success: false,
          });
    }
});


module.exports = router;