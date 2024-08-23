

import Card from './Card';

const SecretList = async ({ secrets, author }) => {
  return (
    <section className='w-full min-h-screen'>
      <div className='flex justify-center items-top h-screen'>
        <div className="w-3/4 h-1/2">
          <h1 className="text-2xl md:text-6xl font-semibold my-3 mt-32 text-slate-700">My Secrets</h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5" >
            {secrets.map((secret, index) => (
              <Card
                key={index}
                secret={secret.description}
                id={secret._id}
                author={author}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecretList