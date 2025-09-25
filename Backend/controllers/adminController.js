export const adminLogin=async(req,res)=>{
    try {
        const {email,pass }= req.body
         if(email != process.env.ADMIN_EMAIL || pass != process.env.ADMIN_PASS){
            
         }

    } catch (error) {
        
    }

}