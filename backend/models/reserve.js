import mongoose from "mongoose";
import validator from "validator";

const reservationSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minLength: [3,"First name should contain atleast 3 characters"],
        maxLength: [30,"First name should not exceed 30 characters"] 
    },
    lastName:{
        type:String,
        required:true,
        minLength: [3,"Last name should contain atleast 3 characters"],
        maxLength: [30,"Last name should not exceed 30 characters"] 
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid email"]
    },
    phone:{
        type:String,
        required:true,
        minLength: [11,"Phone number must contain 11 characters"],
        maxLength: [11,"Phone number must contain 11 characters"]
    },
    time:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})
export const Reservation = new mongoose.model('Reservation', reservationSchema);
