import User from "../models/user-model.js";
import bcrypt from 'bcryptjs';

const Createuser = async (req,res)=>{
    
    const salt = await bcrypt.genSalt(10);
        const secPassword = await bcrypt.hash(req.body.password, salt)
    try {
        const {firstname,lastname,email,password} = req.body;
        await User.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email,
            password: secPassword
        });
        return res.status(200).json({message: "User registered successfully!"});
    } catch (error) {
        return res.status(500).json({message: "error in user registration"});
        
    }
}
export default Createuser