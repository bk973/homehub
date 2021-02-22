import React, {useContext} from 'react'
import { GoogleLoginButton }  from 'react-social-login-buttons'
import { SIGNUP_PATH } from '../../../../constants/paths'
import { Link } from 'react-router-dom'
import {Context } from '../../../../utils/context'


import { ReactComponent as House  } from '../../../../static/house.svg'
import { ReactComponent as Savings} from '../../../../static/savings.svg'
import { ReactComponent as Setup} from '../../../../static/setup.svg'

export default function HomePage() {
    let context = useContext(Context)
    let loginWithGoogle = context.loginWithGoogle
    return (
        <React.Fragment>
          
          <div id="hero" classname="w-full">
            home...
               
          </div>
        </React.Fragment>
    )
}
