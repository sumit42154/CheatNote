import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    startString: {
        type: String,
        required: true, 
    },
    password: {
        type: String,
    },
    textString: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        expires: '3d', 
    }
});
export default mongoose.model("User", userSchema);