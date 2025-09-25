import { response } from "express"
import jwt from "jsonwebtoken"


export const adminLogin=async(req,res)=>{
    try {
        const {email,pass }= req.body
         if(email != process.env.ADMIN_EMAIL || pass != process.env.ADMIN_PASS){
            return res.json({success : false , message : "Invalid Credentials"})
         }
         const token = jwt.sign({email},process.env.JWT_SECRET)
         res.json({success : true,token})

    } catch (error) {
        res.json({success:false , message : error.message})
        
    }

}