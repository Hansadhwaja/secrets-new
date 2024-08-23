
'use client'
import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { deleteSecret } from '@/lib/actions/secret.action'


const Card = ({ secret, id, author }) => {
  const deleteSecretFun = async () => {
    const response = await deleteSecret({ id, author })
  }

  return (
    <div className='bg-transparent border border-slate-300 mt-5 hover:shadow-xl text-left p-8 rounded-xl'>
      <p className='font-semibold text-slate-700 mb-3'>{secret}</p>
      {author && (
        <div className='flex gap-3'>
          <Link href={`/edit/${id}`}>
            <Button className='bg-green-400'>Edit</Button>
          </Link>
          <Button onClick={deleteSecretFun} className='bg-red-500'>Delete</Button>
        </div>
      )}
    </div>
  )
}

export default Card