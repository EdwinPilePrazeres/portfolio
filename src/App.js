import React from 'react'
import './App.css'
import SectionOne from './components/SectionOne'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const App = () => {
    return (
        <Router className='App'>
            <Switch>
                <Route path='/portfolio' component={SectionOne} />
            </Switch>
        </Router>
    )
}

export default App
