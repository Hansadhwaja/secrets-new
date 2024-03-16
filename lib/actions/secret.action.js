
const hostUrl = process.env.HOST_URL;

export async function createSecret({author,description}) {
  try {
    const response = await fetch(`/api/secrets`, {
      method: "POST",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        author: author,
        description: description
      })
    })
    console.log("Secret Created Successfully");
    if (response.ok) {
      return response.json();
    }
  } catch (error) {
    throw new Error(`Error while creating Secret:${error.message}`)
  }

}

export async function fetchSecret() {
  try {
    const response = await fetch(`${hostUrl}/api/secrets`,
      { cache: 'no-store' });
    if (response.ok) {
      return response.json();
    }

  } catch (error) {
    throw new Error(`Error while fetching Thread:${error.message}`)
  }

}


export async function deleteSecret({ id,author }) {
  try {
    const confirmed=confirm('Are you sure?');
    if(confirmed){
    const response = await fetch(`/api/secrets?id=${id}`, {
      method: "DELETE",
      body: JSON.stringify({
        author: author
      })
    });
    if (response.ok) {
      return response.json();
    }
  }

  } catch (error) {
    throw new Error(`Error while deleting Thread:${error.message}`)
  }

}

export async function editSecret({ id,description }) {
  try {
    const response = await fetch(`/api/secrets/${id}`, {
      method: "PUT",
      headers: {
        'Content-Type': "application/json"
      },
      body: JSON.stringify({
        description: description
      })
    });
    if (response.ok) {
      return response.json();
    }

  } catch (error) {
    throw new Error(`Error while editing Thread:${error.message}`)
  }

}