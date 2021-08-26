import React from 'react'
import Advice from '../components/Advice'
import FormLogin from '../components/FormLogin/Index'
import '../styles/PageLogin.scss'




function Login():JSX.Element {   
    return (
        <div className="containerLogin">
            <div className="containerLogin__advice">
                <Advice />
            </div>
            <div className="containerLogin__form">
                <FormLogin />
            </div>
        </div>
    )
}

export default Login
