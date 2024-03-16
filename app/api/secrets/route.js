import Secret from "@/lib/models/secret.model";
import User from "@/lib/models/user.model";
import ConnectToDB from "@/lib/mongoose";
import { NextResponse } from "next/server";


export async function POST(request){
    const {description,author}=await request.json();
    await ConnectToDB();
    const newSecret=await Secret.create({
        author:author,
        description:description
    });
    await User.findByIdAndUpdate(author,{$push:{secrets:newSecret._id}});
    return NextResponse.json({message:"Created Secret"},{status:201});
}

export async function GET(){
    await ConnectToDB();
    const secrets=await Secret.find({});
    return NextResponse.json({secrets},{status:201});
}

export async function DELETE(request){
    const id=request.nextUrl.searchParams.get('id');
    await ConnectToDB();
    const secrets=await Secret.findByIdAndDelete(id);
    return NextResponse.json({secrets},{status:200});
}

