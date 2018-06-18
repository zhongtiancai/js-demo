/*eslint-disable no-unused-vars */
import React from 'react'
import {Link} from 'react-router'
class Counter extends React.Component{

    constructor(props){
        super(props);
    }
    render(){
        return(
        <div>
        Clicked: {this.props.value} times
            <ul>
                <li><Link to={"/detail/1"}>一</Link></li>
                <li><Link to={"/detail/2"}>二</Link></li>
            </ul>
        </div>)
    }
}

export default Counter;