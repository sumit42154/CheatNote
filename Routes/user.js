import express from "express";
import { registerUser, addText, getText } from "../Controllers/user.js";


const router = express.Router();

router.post('/register',registerUser);
router.post('/addtext',addText);
router.get('/gettext',getText);

export default router;