const UploadFile = async(req,res) => {
    try{
        // For single file
        console.log(req.file)
        return res.status(200).json(req.file)

        // For multiple files
        // console.log(req.files)
        // return res.status(200).json(req.files)
    }
    catch(err){
        console.log(err)
        return res.status(500).json(err)
    }
}

export default UploadFile;