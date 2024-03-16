
import SecretList from '@/components/Card/SecretList';
import { fetchSecret } from '@/lib/actions/secret.action';
import ConnectToDB from '@/lib/mongoose';

const Dashboard = async () => {
  await ConnectToDB();
    const { secrets } = await fetchSecret();
      return (
        <SecretList secrets={secrets} />
      )
    }

    export default Dashboard