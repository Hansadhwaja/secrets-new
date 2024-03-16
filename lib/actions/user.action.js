

const hostUrl = process.env.HOST_URL;

 export const createUser = async ({user}) => {
  try {
    const name = user?.firstName + " " + user?.lastName;
    const [EmailAddress] = user?.emailAddresses;
    const { emailAddress } = EmailAddress;
    const response = await fetch(`${hostUrl}/api/users`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        userId: user?.id,
        name: name,
        email: emailAddress,
        username: user?.username
      })
    })
    if(response.ok){
      console.log("User Created Successfully");
    }

  } catch (error) {
    throw new Error('Error while creating user')
  }

}