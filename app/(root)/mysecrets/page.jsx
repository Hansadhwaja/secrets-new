
import SecretList from '@/components/Card/SecretList';
import { fetchSecret } from '@/lib/actions/secret.action';
import { createUser } from '@/lib/actions/user.action';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

const MySecret = async () => {
  const user = await currentUser();
  const author = user?.id;
  if (!user) {
    redirect('/sign-in')
  }
  else {
    await createUser({ user });
  }
  const secrets = await fetchSecret({ author });

  return (
    <SecretList secrets={secrets} author={author} />
  )
}

export default MySecret