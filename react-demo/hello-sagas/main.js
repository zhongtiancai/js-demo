import "babel-polyfill"

import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import Counter from './Counter'
import reducer from './reducers'
import rootSaga from './sagas'
import thunk from 'redux-thunk'




const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(thunk,sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

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

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => action('INCREMENT')}
      onDecrement={() => action('DECREMENT')}
      onIncrementAsync={() => action('INCREMENT_ASYNC')}
      onIncrementAsyncThunk={() => action2(incrementAsync2())}	  />,
    document.getElementById('root')
  )
}

render()
store.subscribe(render)
