import express from "express";
import { registerUser, addText } from "../Controllers/user.js";


const router = express.Router();

router.post('/register',registerUser);
router.post('/addtext',addText);

export default router;