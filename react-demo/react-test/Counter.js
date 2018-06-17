/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'

class Counter extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
        Clicked: {this.props.value} times
        </div>)
    }
}

export default Counter;