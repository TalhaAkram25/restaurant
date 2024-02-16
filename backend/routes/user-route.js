import express from 'express';
import Createuser from '../controllers/user-controller.js';
import { body, validationResult } from 'express-validator';
import jwt  from 'jsonwebtoken'
const jwtSecret = "TThisIsARestaurantApplicationUsedForOrderingFoodOnline"

import User from '../models/user-model.js';
import bcrypt from 'bcryptjs';



const router = express.Router();
router.post("/user",Createuser);



// login functionality starts

router.post("/loginuser",
    [
        body('email').isEmail(),
        body('password', 'incorrect password').isLength({ min: 5 })],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });

        }        
        let email = req.body.email
        try {
            let userData = await  User.findOne({ email: email })
            if (!userData) {
                return res.status(400).json({ errors: "This email is not registered!" });
            }
            const pswdCompare = await bcrypt.compare(req.body.password, userData.password)
            if (!pswdCompare) {
                return res.status(400).json({ errors: "Wrong Password!" });
            }
            const data={
                user : {
                   id: userData.id
                }
            }
            const authToken = jwt.sign(data,jwtSecret)
        return res.json({ success: true,authToken:authToken });
            
        } catch (error) {
            console.log(error)
            res.json({ success: false });
        }

    })



export default router