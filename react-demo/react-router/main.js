import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import Parent from './Parent'
import Frame from './Frame'
import Default from './Default'
import Detail from './Detail'
import { Route,Router, hashHistory,IndexRoute } from 'react-router';



function render() {
  ReactDOM.render(
      <Router history={hashHistory}>
          <Route path="/" component={Frame}>
              <IndexRoute component = {Default}/>
              <Route path="hello" component={Parent}/>
              <Route path="detail/:id" component={Detail}/>
          </Route>

      </Router>,
    document.getElementById('root')
  )
}

render()
