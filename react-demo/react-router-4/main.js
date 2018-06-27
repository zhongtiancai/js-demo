import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import Frame from './Frame'
import Login from './Login'
import { Route,HashRouter,Switch } from 'react-router-dom';
import {PrivateRoute} from './PrivateRoute'


function render() {
  ReactDOM.render(
      <HashRouter>
          <Switch>
              <Route path="/login" component={Login}/>
              <Route path="/" component={Frame}/>

          </Switch>
      </HashRouter>,
    document.getElementById('root')
  )
}

render()
