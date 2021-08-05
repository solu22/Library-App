import GoogleLogin from 'react-google-login'
import GoogleButton from 'react-google-button'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { login } from '../../Redux/Actions/auth'

const AuthButton = () => {
  const history = useHistory()
  const dispatch = useDispatch()

  const responseGoogleSuccess = async (response: any) => {
    dispatch(login(response.tokenId))
    history.push('/homepage')
  }
  const responseGoogleFailure = (error: any) => {
    console.log('Invalid user')
  }

  return (
    <div>
      <GoogleLogin
        clientId="244391030368-mhbd4icbeur977rvthmle9lt2b331s6t.apps.googleusercontent.com"
        render={renderProps => (
          <GoogleButton onClick={renderProps.onClick} disabled={renderProps.disabled} color="primary">
            Google Login In
          </GoogleButton>
        )}
        buttonText="Login"
        onSuccess={responseGoogleSuccess}
        onFailure={responseGoogleFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default AuthButton
