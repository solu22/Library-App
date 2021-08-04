/*React and Router */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

/*Components */
import LandingPage from './Pages/LandingPage/LandingPage'
import Homepage from './Pages/HomePage/Homepage'
import Register from './Pages/LandingPage/RegisterPage/Register'
import Login from './Pages/LandingPage/LoginPage/Login'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path= "/register" exact component = {Register}/> 
        <Route path= "/login" exact component = {Login} />
        <Route path="/homepage" exact component={Homepage} />
      </Switch>
    </Router>
  )
}

export default App
