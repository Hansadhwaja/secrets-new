'use client'
import { useRouter } from 'next/navigation';
import Card from './Card';
import { useEffect } from 'react';

const SecretList = ({secrets}) => {
    const router=useRouter();
    useEffect(()=>{
        router.refresh();
    },[]);
    
  return (
    <section className='w-full min-h-screen'>
          <div className='flex justify-center items-top h-screen'>
            <div className="w-3/4 h-1/2">
              <h1 className="text-2xl md:text-6xl font-semibold my-3 mt-32 text-slate-700">You've Discovered My Secret!</h1>
              <div className="border w-full  border-slate-500 mt-5" />
              {secrets.map((secret, index) => (
                <Card
                  key={index}
                  secret={secret.description}
                  id={secret._id} />
              ))}

            </div>
          </div>
        </section>
  )
}

export default SecretList