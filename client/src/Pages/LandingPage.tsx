import React, { useEffect } from 'react'
import LandingHeader from '../Components/Landing/Navbar'
import LandingBody from '../Components/Landing/Auth/Auth'
import { Container } from '@material-ui/core'

import { useDispatch } from 'react-redux'


const LandingPage = () => {
  
  return (
    <>
    <Container maxWidth="lg">
      <LandingHeader />
      <LandingBody />
    </Container>
  </>
  )
}

export default LandingPage


