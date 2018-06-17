import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import Counter from './Counter'
import reducer from './reducers'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'


const store = createStore(
  reducer,
  applyMiddleware(thunk)
)


function render() {
  ReactDOM.render(<Provider store={store}>
    <Counter/></Provider>,
    document.getElementById('root')
  )
}

render()
