
import Card from "@/components/Card/Card";
import { fetchAllSecret } from "@/lib/actions/secret.action";
import { currentUser } from "@clerk/nextjs";

export default async function Home() {
  const user = await currentUser();
  const secrets = await fetchAllSecret();
  
  return (
    <section className=" w-full min-h-screen">
      <div className="flex justify-center items-center w-full h-svh">
        <div className="w-3/4 h-1/2">
          <h1 className="text-3xl md:text-6xl font-semibold my-3">Secrets</h1>
          <p className=" text-lg md:text-2xl font-thin mb-3 text-slate-500">Don't keep your secrets, share them anonymously!</p>
          <div className="border-2 w-full  border-slate-500" />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {secrets.map((secret, index) => (
              <Card
                key={index}
                secret={secret.description}
                id={secret._id}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
