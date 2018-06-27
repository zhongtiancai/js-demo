/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router-dom'


class Default extends React.Component{


    render(){
        return(
        <div>
          default
            <Link to={'/hello'}>跳转</Link>
        </div>)
    }
}

export default Default;