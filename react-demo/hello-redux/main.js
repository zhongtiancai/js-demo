import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import Counter from './Counter'
import reducer from './reducers'
import thunk from 'redux-thunk'


const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

const action = type => store.dispatch({type})
const action2 = type => store.dispatch(type);

function incrementAsync2() {
  return dispatch => {
    setTimeout(() => {
      // Yay! Can invoke sync or async actions with `dispatch`
      dispatch({"type":"INCREMENT"});
    }, 1000);
  };
}
function testIncrement(){
    setTimeout(() => {
        // Yay! Can invoke sync or async actions with `dispatch`
        alert("hello");
        store.dispatch({"type":"INCREMENT"});
    }, 1000);
};

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsyncThunk={() => action2(incrementAsync2())}
      onTestIncrement={()=> testIncrement()}
    />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
