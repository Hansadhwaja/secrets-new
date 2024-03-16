
'use client'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {editSecret } from "@/lib/actions/secret.action"
import { useRouter } from "next/navigation"

import { useState } from "react"

const EditCard = ({Secret,id}) => {
    const router=useRouter();
    const [secret, setSecret] = useState(Secret);
    const handleEdit = async (e) => {
        e.preventDefault();
        const response= await editSecret({
            description:secret,
            id:id
        });
        router.refresh();
        router.push('/dashboard');
       
    }
    return (
        <div>
            <form onSubmit={handleEdit}>
                <div className="grid w-full items-center gap-4 border-2 p-5 bg-white rounded-xl">
                    <div className="flex flex-col gap-3 mt-3">
                        <h1 className="sm:text-5xl text-3xl font-bold">Edit Your Secret</h1>
                        <p className="sm:text-xl text-md font-thin text-slate-500">Share Your Secret With Others</p>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label className="text-lg font-bold">Secret</Label>
                        <Textarea 
                        className="text-slate-700 font-semibold"
                        placeholder="Edit Your Secret" 
                        value={secret} 
                        onChange={(e) => setSecret(e.target.value)} />
                    </div>
                    <Button type="submit">Edit</Button>
                </div>
            </form>
        </div>
    )
}

export default EditCard