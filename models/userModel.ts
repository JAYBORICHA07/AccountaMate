"use server"
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        require: [true, "Provide email"],
    },
    userEmail: {
        type: String,
        require: [true, "Provide email"],
    },
    friendName: {
        type: String,
        require: [true, "Provide email"],
    },
    friendEmail: {
        type: String,
        require: [true, "Provide email"],
    },
    amount: {
        type: Number,
        require: [true, "Provide email"],
    },
    goals : {
        type : String,
    },
    date: {
        type: String,
        require: [true, "Provide email"],
    },
});


const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;