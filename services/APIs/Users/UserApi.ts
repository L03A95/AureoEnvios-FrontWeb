const sendUserInfoToAPI = async (user) => {
    try {
      const response = await fetch('https://tu-api.com/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          id: user.id,
          email: user.primaryEmailAddress.emailAddress,
          name: user.fullName,
        }),
      })
    }
    catch (error) {
      console.error(error)
    }
}