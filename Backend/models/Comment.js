import mongoose  from "mongoose";

const Commentchema = new mongoose.Schema({
  blog : {type: mongoose.Schema.Types.ObjectId,ref:'blog',required : true}
},{timestamps:true})

const Comment = mongoose.model('Comment',Commentchema)
export default Comment