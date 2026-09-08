import express from "express";
import mongoose from "mongoose";
import userRoutes from "./Routes/user.js";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();    

const app = express();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONG_URL,{
    dbName:'CheatNoteDB',
}).then(()=>{
    console.log("Connected to MongoDB");
}).catch((err)=>console.log(err))


app.get('/',(req,res)=>{
    res.json({
        message:"Welcome to Cheat Note Backend",
        success : true,
    })
})

app.use('/api/user', userRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})