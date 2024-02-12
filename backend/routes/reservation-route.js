import express  from "express";
import { sendReservation } from "../controllers/resrve-controller.js"

const router = express.Router();

router.post('/send', sendReservation)


export default router