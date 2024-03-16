
'use client'
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { createSecret } from "@/lib/actions/secret.action"
import { useRouter } from "next/navigation"

import { useState } from "react"

const SubmitCard = ({author}) => {
    function toTitleCase(str) {
        return str.replace(
          /\w\S*/g,
          function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          }
        );
      }
    const router=useRouter();
    const [secret, setSecret] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(!secret){
            alert("Secret is Required");
            return;
        }
        const response= await createSecret({
            description:toTitleCase(secret),
            author:author
        });
        
        router.refresh();
        router.push('/dashboard');
       
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4 border-2 p-5 bg-white rounded-xl">
                    <div className="flex flex-col gap-3 mt-3">
                        <h1 className="sm:text-5xl text-3xl font-bold">Submit Your Secret</h1>
                        <p className="text-md sm:text-xl font-thin text-slate-500">Share Your Secret With Others</p>
                    </div>
                    <div className="flex flex-col space-y-1.5">
                        <Label className="text-lg font-bold">Secret</Label>
                        <Textarea 
                        className="font-semibold text-slate-700"
                        placeholder="Enter Your Secret" 
                        value={secret} 
                        onChange={(e) => setSecret(e.target.value)} />
                    </div>
                    <Button type="submit">Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default SubmitCard