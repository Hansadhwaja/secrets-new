import { Button } from "@/components/ui/button";
import { currentUser } from "@clerk/nextjs";
import Link from "next/link";


export default async function Home() {
  const user = await currentUser();
  return (
    <section className=" w-full min-h-screen">
      <div className="flex justify-center items-center w-full h-svh">
        <div className="w-3/4 h-1/2">
          <h1 className="text-3xl md:text-6xl font-semibold my-3">Secrets</h1>
          <p className=" text-lg md:text-2xl font-thin mb-3 text-slate-500">Don't keep your secrets, share them anonymously!</p>
          <div className="border-2 w-full  border-slate-500" />
          <div className="flex gap-3 sm:hidden mt-3">
            <Link href='/dashboard'>
              <Button>Dashboard</Button>
            </Link>
            <Link href='/submit'>
              <Button variant='ghost'>Submit a Secret</Button>
            </Link>
          </div>
          {!user &&
            <div className="sm:flex gap-3 hidden mt-3">
              <Link href='/sign-in'>
                <Button>SignIn</Button>
              </Link>
              <Link href='/sign-up'>
                <Button variant='ghost'>SignUp</Button>
              </Link>
            </div>
          }

        </div>
      </div>
    </section>
  );
}
