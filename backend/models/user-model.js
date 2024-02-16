import mongoose from "mongoose";
import validator from "validator";

const userSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true
    },
    lastname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validate:[validator.isEmail,"Provide a valid email"]
    },
    password:{
        type: String,
        required:true
    }

})
const User = new mongoose.model("User",userSchema);
export default User