/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'
import Counter from './Counter'

class Parent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            hello:'helloword'
        }
    }
    changeState=()=>{
           this.setState({
               hello:'click'
           });
    }
    render(){
        return(
        <div>
            <Counter value={this.state.hello}/>
        <button onClick={this.changeState}></button>
        </div>)
    }
}

export default Parent;