/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'
import {connect} from 'react-redux'

class Counter extends React.Component{

    constructor(props){
        super(props);
    }

    onIncrementAsyncThunk=()=>{
       this.props.incrementAsync();
    }

    onIncrement=()=>{
       this.props.increment();
    }
    onDecrement=()=>{
       this.props.decrement()
    }


    render(){
        return(
        <div>
        <button onClick={this.onIncrementAsyncThunk}>
            Increment after 1 second
        </button>
        {' '}
        <button onClick={this.onIncrement}>
            Increment
        </button>
        {' '}
        <button onClick={this.onDecrement}>
            Decrement
        </button>
        <hr />
        <div>
        Clicked: {this.props.value} times
        </div>
    </div>)
    }
}
const mapStateToProps=(state)=>{
    console.log(state);
    return {
        value:state
    }
}
const mapDispatchToProps={
        incrementAsync:function() {
        return dispatch => {
            setTimeout(() => {
                // Yay! Can invoke sync or async actions with `dispatch`
                dispatch({"type":"INCREMENT"});
            }, 1000);
        };
        },
        increment:function(){
                return {"type":"INCREMENT"};
                },
        decrement:function(){
            return {"type":"DECREMENT"};
        },
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter);
