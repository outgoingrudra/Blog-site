import mongoose, { connect }  from "mongoose";

const connectDB = async()=>{
    try {
        mongoose.connection.on('connected',()=>console.log("DB CONNECTED !!!!!!!!!!!!!!!!!!!!!!"))
        await mongoose.connect(`${process.env.MONGODB_URL}/quickblog`)
    } catch (error) {
        console.log(error.message)
    }
}


export default connectDB