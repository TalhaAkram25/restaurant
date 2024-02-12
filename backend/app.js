import express  from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectToMongoDb } from "./config/mongodb.js";
import { errorMiddliWare } from "./error/error.js"
import reservationRouter from "./routes/reservation-route.js";

connectToMongoDb();

const app = express();
dotenv.config({path: "./config/dotenv.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods: ['POST'],
    credentials:true

}));


app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api/v1/reservation',reservationRouter)


app.use(errorMiddliWare)

export default app