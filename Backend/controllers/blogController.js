
export const addBlog =async(req,res)=>{
    try {
        const {title,subTitle , description , category, isPublished , } = JSON.parse(req.body.blog)

        const imageFile =  req.file;
    } catch (error) {
        
    }
}