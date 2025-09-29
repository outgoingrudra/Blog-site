
import jwt from "jsonwebtoken"
import Blog from "../models/Blog"


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


export const  getAllBlogsAdmin = async(req,res)=>{
      
    try {
       const blogs = await Blog.find({}).sort({createdAt : -1 })

       res.json({success:true , blogs })
        
    } catch (error) {
           res.json({success:false , message : error.message})

    }
}


