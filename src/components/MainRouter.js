import React, {Component} from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './pages/Home'
import CPQ from './pages/CPQ'

// This is the main routing for the application
class MainRouter extends Component {
  render () {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route exact path='/cpq' component={CPQ}/>
        </Switch>
      </main>
    )
  }
}

export default MainRouter
