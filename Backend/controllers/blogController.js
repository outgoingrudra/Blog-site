import fs from "fs"
import imageKit from "../config/ImageKit.js";
export const addBlog =async(req,res)=>{
    try {
        const {title,subTitle , description , category, isPublished , } = JSON.parse(req.body.blog)

        const imageFile =  req.file;
        if(!title || !description || !category || !imageFile){
            return res.json({success:false ,message : "Missing required fields"})
        }

        const fileBuffer = fs.readFileSync(imageFile.path)

        //upload image to imagekit
        const response = await imageKit.upload({
            file : fileBuffer,
            fileName : imageFile.originalName,
            folder: "/blogs"
        })
    } catch (error) {
        
    }
}