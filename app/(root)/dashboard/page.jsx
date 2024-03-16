
import SecretList from '@/components/Card/SecretList';
import { fetchSecret } from '@/lib/actions/secret.action';
import { createUser } from '@/lib/actions/user.action';
import ConnectToDB from '@/lib/mongoose';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const Dashboard = async () => {
  const user = await currentUser();
  const author=user?.id;
  await ConnectToDB();
  if(!user){
    redirect('/sign-in')
  }
  else {
    await createUser({user});
  }
 
    const { secrets } = await fetchSecret();
      return (
        <SecretList secrets={secrets} author={author} />
      )
    }

    export default Dashboard