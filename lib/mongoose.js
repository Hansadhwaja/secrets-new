import mongoose from "mongoose";
 const ConnectToDB= async ()=> {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("Connect to DB Successfully");
    }
    catch (err){
        console.log("Error while connecting DB", err);
    }
}


export default ConnectToDB;