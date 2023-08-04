import mongoose from "mongoose";
import {IUser} from '../interface/interface';


const userShema = new mongoose.Schema<IUser>({
  name: {
    type : String ,
    required :true 
  },
  email: {
    type:String,
    required : [true , "Name cannot be empty"]
  },
  password: {
    type: String,
    required : [true , "password is Required"],
  },
 
})

const UserModel = mongoose.model<IUser>("User" , userShema) 
export default UserModel