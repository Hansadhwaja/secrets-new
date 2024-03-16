
import SecretList from '@/components/Card/SecretList';
import { fetchSecret } from '@/lib/actions/secret.action';
import ConnectToDB from '@/lib/mongoose';

const Dashboard = async () => {
  const user = currentUser();
  let isuser = false;
  if (user) {
    isuser = true;
    await ConnectToDB();
    await createUser(user);
  }
  await ConnectToDB();
    const { secrets } = await fetchSecret();
      return (
        <SecretList secrets={secrets} />
      )
    }

    export default Dashboard