/*eslint-disable no-unused-vars */
import React from 'react'
import Counter from './Counter'

class Parent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            times:1
        }
    }
    changeState=()=>{
        let times = this.state.times+1;
           this.setState({
               times:times
           });
    }
    render(){
        return(
        <div>
        <Counter value={this.state.times}/>
        <a onClick={this.changeState}>点击</a>
        </div>)
    }
}

export default Parent;