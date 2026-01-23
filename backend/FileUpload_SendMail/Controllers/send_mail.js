import nodemailer from 'nodemailer';
const TransportInfo = nodemailer.createTransport({
    service:"gmail",
    auth:{
        user:"nathimike102@gmail.com",
        pass:"bqkm lpbn edif wcdi"
    }
})

const SendMail = async(req,res) => {
    try{
        const result = await TransportInfo.sendMail({
            from:"nathimike102@gmail.com",
            to:"nathimike102@gmail.com",
            subject:"Testing-subject",
            // html:"",
            text:"This is testing mail from nodemailer"
            // attachments:[
            //     {
            //         filename:"25M11CS033 1.JPG",
            //         path:""
            //     }
            // ]
        })
        console.log(result)
        return res.status(200).json(result)
    }
    catch(err){
        return res.status(500).json(err)
    }
}

export default SendMail;