import mongoose from "mongoose";
import {IPassword} from "../interface/interface"

const passwordSchema = new mongoose.Schema<IPassword>({
  userId: {
    type:mongoose.Schema.Types.ObjectId ,
    ref :"User"
  },
  password : {
    type : Object ,
    required : true ,
  },
  appName:{
    type : String ,
    required : true ,
  },
  userName : {
    type:String ,
    required : true
  }
})

const passwordModel = mongoose.model<IPassword>("Password" , passwordSchema) 
export default passwordModel;