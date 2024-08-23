'use client'
import { UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import DropDownMenu from '../Card/DropDownMenu'
import { usePathname } from 'next/navigation'
import { NavbarItems } from '@/constants'
import { Button } from '../ui/button'

const Navbar = () => {
    const path = usePathname();
    return (
        <nav className='fixed w-full bg-slate-300 px-12 py-6' >
            <div className='flex-between w-full'>
                <DropDownMenu />
                <div>
                    <h1 className='text-3xl font-bold'>Secrets</h1>
                </div>
                <div className="w-1/2 sm:flex-center gap-6 mx-auto hidden">
                    {NavbarItems.map(item => {
                        const isActive = path === item.link || path.startsWith(`/${item.link}`)
                        return (
                            <Link href={item.link} key={item.label}>
                                <Button variant='ghost' className={`w-full px-4 py-2 font-semibold text-md  text-center rounded-xl ${isActive && 'bg-black text-white'}`}>{item.label}</Button>
                            </Link>
                        )
                    })}
                </div>
                <div className='flex-center mr-12'>
                    <UserButton />
                </div>
            </div>
        </nav>
    )
}

export default Navbar