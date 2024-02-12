import mongoose from 'mongoose';
import dotenv from "dotenv";


dotenv.config({path: "./config/dotenv.env"});

// console.log(process.env.MONGO_DB_URI)

export const connectToMongoDb = ()=> {
    mongoose.connect(process.env.MONGO_DB_URI,{
        dbName: "RESTAURANT"
    }).then(()=>{
        console.log("connected to database successfully!");
    }).catch(err=>{
        console.log(`error in db connection ${err}`);
    })
}