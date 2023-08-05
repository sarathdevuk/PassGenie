import mongoose from "mongoose";
import {IUser} from '../interface/interface';


const userShema = new mongoose.Schema<IUser>({
  email: {
    type:String,
    required : [true , "Name cannot be empty"]
  },
  password: {
    type: String,
    required : [true , "password is Required"],
  },
  otp:{
    type:String,
  }
 
})

const UserModel = mongoose.model<IUser>("User" , userShema) 
export default UserModel