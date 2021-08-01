import React from 'react'
import GoogleLogin from 'react-google-login'
import axios from 'axios'


function GoogleButton() {
  const handleGoogleResponse = async (response: any) => {
    if (response.tokenId) {
      console.log('response from google', response)
      const { data } = await axios.post('/users/login', {
        id_token: response.tokenId,
      })
      localStorage.setItem('token', data.token)

      await axios.get('/users')
    }
  }

  return (
    <>
      
      <GoogleLogin
        clientId="244391030368-mhbd4icbeur977rvthmle9lt2b331s6t.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={handleGoogleResponse}
        onFailure={handleGoogleResponse}
        cookiePolicy={'single_host_origin'}
      />
      ,
    </>
  )
}

export default GoogleButton














