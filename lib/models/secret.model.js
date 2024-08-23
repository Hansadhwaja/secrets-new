import mongoose from "mongoose";
import ConnectToDB from "../mongoose";

ConnectToDB();

const secretSchema = new mongoose.Schema({
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,
        required: true,
    }
}, { versionKey: false, timestamps: true });


const Secret = mongoose.models.Secret || mongoose.model('Secret', secretSchema);

export default Secret;