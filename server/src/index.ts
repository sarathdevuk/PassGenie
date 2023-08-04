import dotenv from 'dotenv'
import express from 'express' ;
import cors from 'cors'
import path from 'path';
import morgan from 'morgan'
import userRouter from './routes/userRoute';

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
    origin:[process.env.ORIGIN_URL as string ],
    methods : ["GET" , "POST" , "PUT" , "PATCH" , "DELETE"] ,
    credentials : true,
  })
)

app.use("/", userRouter) 


app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});

