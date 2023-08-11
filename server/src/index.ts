import dotenv from 'dotenv'
import express from 'express' ;
import cors from 'cors'
import path from 'path';
import morgan from 'morgan'
import userRouter from './routes/userRoute';
import dbconnection from './config/database';
import errorHandler from './middleware/errorHandler';

dotenv.config();

const app = express();
const port = process.env.PORT || 5050

app.use(morgan('dev'))
app.use(express.json()) ;
app.use(express.urlencoded({extended:true}))
app.use(express.static(path.resolve() + "/public" ))


// CORSE
app.use(
  cors({
    origin:[process.env.CLIENT_URL as string , 'https://passgiene.netlify.app' ],
    methods : ["GET" , "POST" , "PUT" , "PATCH" , "DELETE"] ,
    credentials : true,
  })
)

// User Router middleware setup 
app.use("/", userRouter) 

// global error handler
app.use(errorHandler)

// connecting to database 
dbconnection();


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

