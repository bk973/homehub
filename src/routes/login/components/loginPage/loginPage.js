import React from 'react'
import LoginForm from '../loginForm'
import { GoogleLoginButton} from 'react-social-login-buttons'
import { Link } from 'react-router-dom'
import { SIGNUP_PATH } from '../../../../constants/paths'

export default function loginPage({firebase,googleLogin}) {
    return (
        <div className="columns">
            <div className="column"></div>
              <div className="column">
                <div className="box login-box">
                  <GoogleLoginButton onClick={googleLogin}/>
                  <LoginForm/>
                  <p className="has-text-centered">Dont have an account? <Link to={SIGNUP_PATH}>Signup</Link></p>
                </div>
              </div>
            <div className="column"></div>
        </div>
    )
}
