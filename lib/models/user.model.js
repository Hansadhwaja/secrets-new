import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true
    },
    secrets: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Secret"
    }]
}, { versionKey: false, timestamps: true });

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;