/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'

class Detail extends React.Component{


    render(){
        return(
        <div>
           详情 {this.props.match.params.id}
        </div>)
    }
}

export default Detail;