import {Schema , model } from "mongoose";
import validator from "validator";

const contactSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        minLength: [11,"Phone number must contain 11 characters"],
        maxLength: [11,"Phone number must contain 11 characters"]
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid email"]
    },
    message:{
        type:String,
        required:true
    }
});

const Contact = new model("Contact", contactSchema);
export default Contact
