
import Secret from "@/lib/models/secret.model";
import User from "@/lib/models/user.model";
import ConnectToDB from "@/lib/mongoose";
import { NextResponse } from "next/server";

export async function POST(request) {
    const { author } = await request.json();
    await ConnectToDB();
    const user = await User.findOne({ userId: author });
    const secrets = await Secret.find({ author: user._id });
    return NextResponse.json({ secrets }, { status: 201 });
}