/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'
import Default from './Default'
import Counter from './Counter'

class Frame extends React.Component{


    render(){
        return(

        <div>
            <div>header</div>
            {this.props.children}
            <div>footer</div>
        </div>)
    }
}

export default Frame;