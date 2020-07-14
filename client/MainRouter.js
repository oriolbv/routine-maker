import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Menu from '@material-ui/core/Menu'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import Profile from './user/Profile'

import Routines from './routines/Routines'

class MainRouter extends Component {
  render() {
    return (<div>
      <Menu/>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/users" component={Users}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/signin" component={Signin}/>
          <Route path="/user/:userId" component={Profile}/>
          <Route path="/routines" component={Routines}/>   
      </Switch>
    </div>)
  }
}
export default MainRouter