/*eslint-disable no-unused-vars */
import React, { Component, PropTypes } from 'react'
import Default from './Default'
import Parent from './Parent'
import Detail from './Detail'
import {Switch,Route} from 'react-router-dom'
import {PrivateRoute} from './PrivateRoute'


class Frame extends React.Component{


    render(){
        return(

        <div>
            <div>header</div>
            <Switch>
                <Route path="/" exact component={Default} />
                <Route path="/hello" component={Parent} />
                <PrivateRoute path="/detail/:id" component={Detail} />
            </Switch>
            <div>footer</div>
        </div>)
    }
}

export default Frame;