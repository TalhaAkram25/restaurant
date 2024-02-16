import express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToMongoDb } from "./config/mongodb.js";
import { errorMiddliWare } from "./error/error.js"
import reservationRouter from "./routes/reservation-route.js";
import contactRoute from './routes/contact-route.js'
import userRoute from './routes/user-route.js'


connectToMongoDb();

const app = express();
dotenv.config({path: "./config/dotenv.env"});

// cors
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods: ['POST'],
    credentials:true

}));


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/reservation',reservationRouter)
app.use('/api/v1/form',contactRoute)
app.use('/api/v1/createuser',userRoute)
app.use('/api/v1/login',userRoute)
app.get("/", (req, res, next)=>{return res.status(200).json({
    success: true,
    message: "HELLO WORLD"
  })})


app.use(errorMiddliWare)


app.listen(process.env.PORT, ()=>{
    console.log(`App listening on PORT ${process.env.PORT}`);
});