"use server"
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        require: [true, "Provide email"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "Provide Password"],
        unique: true,
    },
    goals : {
        type : [String],
    }
});



const User = mongoose.models.Users || mongoose.model("Users", userSchema);

export default User;