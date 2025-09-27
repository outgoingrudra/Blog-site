import fs from "fs/promises"; // Use promises version for async operations
// OR: import fs from "fs"; (keep current if you prefer sync)
import imageKit from "../config/ImageKit.js";
import Blog from "../models/Blog.js";

export const addBlog = async (req, res) => {
    try {
        const { title, subTitle, description, category, isPublished } = JSON.parse(req.body.blog);

        const imageFile = req.file;
        if (!title || !description || !category || !imageFile) {
            return res.json({ success: false, message: "Missing required fields" });
        }

        // Option 1: Use async file reading (recommended)
        const fileBuffer = await fs.readFile(imageFile.path);
        
        // Option 2: Keep sync version if preferred
        // const fileBuffer = fs.readFileSync(imageFile.path);

        // Upload image to imagekit
        const response = await imageKit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname, // ✅ Fixed: use 'originalname' not 'originalName'
            folder: "/blogs"
        });

        // Optimized url imagekit
        const optimizedImageURL = imageKit.url({
            path: response.filePath,
            transformation: [
                { quality: 'auto' }, // auto compression
                { format: 'webp' },
                { width: '1280' }
            ]
        });

        const image = optimizedImageURL;

        await Blog.create({
            title,
            subTitle,
            description,
            category,
            image,
            isPublished
        });

        res.json({
            success: true,
            message: "Blog Added Successfully"
        });
    } catch (error) {
        console.error("Blog creation error:", error); // Add logging for debugging
        res.json({
            success: false,
            message: error.message
        });
    }
};



export const getAllBlogs = async(req,res)=>{
    try {
        const blogs = await Blog.find({isPublished:true})
        res.json({success:true , blogs})
        
    } catch (error) {
          res.json({success:false , message:error.message})
    }
}

export const getBlogById = async(req,res)=>{
    try {

        const {blogId} = req.parse
        const blog = await  Blog.findById(blogId)
        if(!blog){
              res.json({success:false , message:"Blog Not Found !"})
        }
        res.json({success:true,blog})
        
    } catch (error) {
                  res.json({success:false , message:error.message})

    }
}




export const  deleteBlogById = async(req,res)=>{

     try {

        const {id} = req.body
         await  Blog.findByIdAndDelete(id)
        
        res.json({success:true,message:"blog deleted successfully !"})
        
    } catch (error) {
                  res.json({success:false , message:error.message})

    }

}



export const  togglePublish = async(req,res)=>{

     try {

        const {id} = req.body
         const blog = await  Blog.findById(id)
         blog.isPublished = !blog.isPublished
          await blog.save()
         
        
        res.json({success:true,message:"blog status Updated  !"})
        
    } catch (error) {
                  res.json({success:false , message:error.message})

    }

}
