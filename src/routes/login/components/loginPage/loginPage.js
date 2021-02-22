import React from 'react'
import LoginForm from '../loginForm'
import { GoogleLoginButton} from 'react-social-login-buttons'
import { Link } from 'react-router-dom'
import {Context} from '../../../../utils/context'
import { SIGNUP_PATH } from '../../../../constants/paths'

export default function LoginPage() {
    let context = React.useContext(Context)
    let loginWithGoogle = context.loginWithGoogle
    return (
        <div className="">
            <div>
              <GoogleLoginButton onClick={loginWithGoogle}/>
            </div>
        </div>
    )
}
