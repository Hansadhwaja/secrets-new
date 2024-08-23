
import EditCard from "@/components/Card/EditCard";
import Secret from "@/lib/models/secret.model";;
import ConnectToDB from "@/lib/mongoose";
import { currentUser } from "@clerk/nextjs"



const Edit = async ({ params }) => {
    const { id } = params;
    const user = await currentUser();
    await ConnectToDB();
    const findSecret = await Secret.findById(id);
    return (
        <section className='w-full min-h-screen'>
            <div className='flex-center h-screen'>
                <div className="w-3/4 lg:w-1/2 h-1/2 rounded-lg">
                    <EditCard
                        Secret={findSecret?.description}
                        id={id}
                    />
                </div>
            </div>
        </section>
    )
}

export default Edit