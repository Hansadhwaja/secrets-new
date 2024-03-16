
'use client'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import ConnectToDB from '@/lib/mongoose'
import { deleteSecret } from '@/lib/actions/secret.action'
import { useRouter } from 'next/navigation'




const Card = ({ secret, id,author }) => {
  const router = useRouter();
  const deleteSecretFun = async () => {
    await ConnectToDB();
    const response = await deleteSecret({ id,author });
    console.log(response);
    router.refresh();
  }


  return (
    <div className='flex justify-between items-center w-full h-fit bg-slate-200 border border-slate-300 mt-5 shadow-xl text-left p-3 mb-4'>
      <div>
        <p className='text-md text-slate-500'>{secret}</p>
      </div>
      <div className='flex gap-3'>
        <Link href={`/edit/${id}`}>
          <Button>Edit</Button>
        </Link>

        <button onClick={deleteSecretFun} className='bg-black text-slate-100 text-sm font-semibold w-fit p-2  px-3 hover:bg-slate-800 rounded-md'>Delete</button>

      </div>
    </div>
  )
}

export default Card