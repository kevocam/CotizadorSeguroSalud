import React  from 'react'
import './Login.scss'
import Advice from '../Advice'
import FormLogin from '../FormLogin'
function Login() {
    
    return (
        <div className="login">
            <Advice />
            <FormLogin />
        </div>
    )
}

export default Login

