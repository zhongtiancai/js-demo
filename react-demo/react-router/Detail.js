/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'
import {Link} from 'react-router'

class Detail extends React.Component{


    render(){
        return(
        <div>
           详情 {this.props.params.id}
        </div>)
    }
}

export default Detail;