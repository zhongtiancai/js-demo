import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import Parent from './Parent'




function render() {
  ReactDOM.render(
    <Parent/>,
    document.getElementById('root')
  )
}

render()
