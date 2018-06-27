/*eslint-disable no-unused-vars */
import React from 'react'
import {fakeAuth} from './PrivateRoute'
import { withRouter } from 'react-router-dom'
import Frame from './Frame'

class Login extends React.Component{

    login=()=>{
        let self = this;
        fakeAuth.authenticate(function () {
            self.props.history.push('/')
        })
    }

    render(){
        return(
        <div>
           要登录才能查看哦
            <button onClick={this.login}>登录</button>
        </div>)
    }
}

export default Login;