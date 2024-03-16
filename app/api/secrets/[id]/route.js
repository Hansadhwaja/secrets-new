import Secret from "@/lib/models/secret.model";
import ConnectToDB from "@/lib/mongoose";
import { NextResponse } from "next/server";


export async function PUT(request, { params }) {
    const { id } = params;
    const { description } = await request.json();
    await ConnectToDB();
    await Secret.findByIdAndUpdate(id, { description: description });
    const res = await Secret.findById(id);
    return NextResponse.json({ res }, { status: 200 });

}

export async function GET({ params }) {
    const { id } = params;
    await ConnectToDB();
    const res = await Secret.findById(id);
    return NextResponse.json({ res }, { status: 200 });

}