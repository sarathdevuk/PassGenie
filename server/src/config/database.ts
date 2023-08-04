import mongoose from "mongoose";

const dbconnection = () =>{
  const uri: string = process.env.MONGOURI as string ;
  mongoose.set("strictQuery" , true) ;

  // Database connection 
  mongoose
      .connect(uri) 
      .then(() => {
        console.log("Database Connected Successfully");
      })
      .catch((err) => {
        console.log((err));
      })
}

export default dbconnection;