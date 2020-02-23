import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Pages/Home'
import Results from './Pages/Results'
import './App.css'

export default function App() {
      return (
        <Router>
        <div>
          <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/results' component={Results}/>
             
          </Switch>
        </div>
      </Router>
      )
}
