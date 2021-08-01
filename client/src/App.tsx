
import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Userprofile from './Components/Userprofile';
// import Auth from './Components/Landing/Auth/Auth';
//import EditBookForm from './Components/Books/Form/EditBookForm';
 import Homepage from './Pages/Homepage';
// import Navbar from './Components/Landing/Navbar';
// import useStyles from '../styles'
import LandingPage from './Pages/LandingPage';

const App = () => {
  //const classes= useStyles()

  return (
    
    
    <Router>
    <Switch>
    <Route path ="/" exact component = {LandingPage}/>

    <Route path = "/homepage" exact component ={Homepage} />
    <Route path = "/successpage" exact component= {Userprofile} />
       
      
    </Switch>
    </Router>
  )
}

export default App

