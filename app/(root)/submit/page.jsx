
import SubmitCard from "@/components/Card/SubmitCard"
import User from "@/lib/models/user.model";
import { currentUser } from "@clerk/nextjs"
import { redirect } from "next/dist/server/api-utils";


const Submit = async () => {
    const user = await currentUser();

    if (!user) {
        redirect('/sign-in')
    }
    const findUser = await User.findOne({ userId: user?.id });
    const author = await findUser?._id.toString();
    return (
        <section className='w-full min-h-screen'>
            <div className='flex justify-center items-center h-screen'>
                <div className="w-3/4 lg:w-1/2 h-1/2">
                    <SubmitCard
                        author={author} />
                </div>
            </div>
        </section>
    )
}

export default Submit