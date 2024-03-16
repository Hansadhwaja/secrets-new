'use client'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import hamburger from '@/app/assets/hamburger.svg';
import DropDownMenu from '../Card/DropDownMenu'
import { usePathname } from 'next/navigation'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const path = usePathname();
    useEffect(() => {
        setIsOpen(false);
    }, [path])
    return (
        <nav className='fixed w-full bg-slate-300 p-3' >
            <div className='flex w-3/4 justify-between'>
                <div className='sm:hidden  w-full mt-5 flex justify-start pl-10'>
                    <button onClick={() => setIsOpen(!isOpen)}>
                        <Image
                            src={hamburger}
                            alt='menu_img'
                            width={30}
                            height={30} />
                    </button>

                    {isOpen && <DropDownMenu />}

                </div>
                <div className="w-full mt-3 sm:flex sm:gap-3 sm:justify-end hidden">
                    <Link href='/'>
                        <Button>Home</Button>
                    </Link>
                    <Link href='/dashboard'>
                        <Button variant="outline">Dashboard</Button>
                    </Link>
                    <Link href='/submit'>
                        <Button variant="ghost">Submit a Secret</Button>
                    </Link>
                </div>
                <div className='absolute top-8 right-20'>
                    <UserButton />
                </div>
            </div>

        </nav>
    )
}

export default Navbar