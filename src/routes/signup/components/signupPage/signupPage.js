import React from 'react'
import { Link } from 'react-router-dom'
import { GoogleLoginButton } from 'react-social-login-buttons'
import SignupForm from '../signupForm'
import { LOGIN_PATH } from '../../../../constants/paths'

export default function signupPage({emailSignup, googleLogin, firebase}) {
    return (
        <div className="columns"> 
          <div className="column"></div>
          <div className="column">
              <div className="box signup-box">
                <GoogleLoginButton onClick={googleLogin}/>
                <SignupForm
                handleSubmit={emailSignup}
                />
                <p className="has-text-centered">
                    Already have an account, 
                    <Link to={LOGIN_PATH}>
                       Login
                    </Link>
                </p>
              </div>
          </div>
          <div className="column"></div>
        </div>
    )
}
