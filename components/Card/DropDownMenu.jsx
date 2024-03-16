
import Link from 'next/link'

const DropDownMenu = () => {
   
    return (
        <div className='border border-slate-700 flex flex-col gap-3 w-[200px] h-[200px] bg-slate-100 absolute top-16 p-3 rounded-lg'>
        <Link href='/'>
            <h1 className='font-semibold text-md mt-5'>Home</h1>
        </Link>
        <Link href='/dashboard'>
            <h1 className='font-semibold text-md'>Dashboard</h1>
        </Link>
        <Link href='/submit'>
            <h1 className='font-semibold text-md'>Submit a Secret</h1>
        </Link>
        </div> 
    )
}


export default DropDownMenu

