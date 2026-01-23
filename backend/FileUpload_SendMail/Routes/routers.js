import express from 'express';
import UploadFile from '../Controllers/upload.js';
import SendMail from '../Controllers/send_mail.js';
import path from 'path';
import multer from 'multer';

const router = express.Router();
const Storage = multer.diskStorage({
    destination:function(req,file,callback){
        callback(null,"uploads")
    },
    filename:function(req,file,callback){
        callback(null,file.originalname)
    }
})

const FileFilters = (req,file,callback) =>{
    const AllowedTypes = /png|jpg|jpeg|svg/
    const extension = path.extname(file.originalname).toLowerCase()
    if(AllowedTypes.test(extension)){
        callback(null,true)
    }
    else{
        callback(new Error("Not Valid Format"))
    }
}

const Upload = multer({
    storage:Storage,
    fileFilter : FileFilters,
    limits:{
        fileSize:1024*1024*3
    }
})

// router.post("/file-upload",Upload.array('file',3), UploadFile) // if multiple files
router.post("/file-upload",Upload.single('file'), UploadFile) // for single file
router.post("/send-mail", SendMail);

export default router;