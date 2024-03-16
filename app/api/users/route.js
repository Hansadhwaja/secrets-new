import User from "@/lib/models/user.model";
import ConnectToDB from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function POST(request){
    const {name,email,username,userId}= await request.json();
    await ConnectToDB();
    const user=await User.findOne({email:email});
    if(user){
        return NextResponse.json({message:"user already exists"});
    }
    else{
        const newUser=await User.create({
            userId:userId,
            name:name,
            email:email,
            username:username
        });
        return NextResponse.json({newUser},{status:201});
    }
   
}