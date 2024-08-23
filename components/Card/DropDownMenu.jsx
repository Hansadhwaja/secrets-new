'use client'
import Link from 'next/link'
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet"
import hamburger from '@/app/assets/hamburger.svg'
import Image from 'next/image'
import { NavbarItems } from '@/constants'
import { usePathname } from 'next/navigation'

const DropDownMenu = () => {
    const path = usePathname();
    return (
        <div className='sm:hidden'>
            <Sheet>
                <SheetTrigger>
                    <Image
                        src={hamburger}
                        alt='menu_img'
                        width={32}
                        height={32}
                    />
                </SheetTrigger>
                <SheetContent>
                    <div className='mt-14'>
                        <div>
                            <h1 className='text-4xl font-bold my-10'>Secrets</h1>
                        </div>
                        {NavbarItems.map(item => {
                            const isActive = path === item.link || path.startsWith(`/${item.link}`)
                            return (
                                <Link href={item.link} key={item.label}>
                                    <h1 className={`font-semibold text-md mt-5 p-4 text-center rounded-xl ${isActive && 'bg-black text-white'}  `}>{item.label}</h1>
                                </Link>
                            )
                        })}
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default DropDownMenu

