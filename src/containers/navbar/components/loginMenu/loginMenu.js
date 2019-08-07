import React from 'react'
import { Link } from 'react-router-dom'
import { SIGNUP_PATH, LOGIN_PATH } from '../../../../constants/paths'

export default function loginMenu() {
    return (
        <nav className="navbar" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                  <Link className="navbar-item" to="/">HomeHub</Link>
            </div>
            <div className="navbar-end">
             <div className="navbar-item">
              <div className="buttons">
                <Link className="button is-primary" to={LOGIN_PATH}>Login</Link>
                <Link className="button is-light" to={SIGNUP_PATH}>Signup</Link>
              </div>
             </div>
            </div>
        </nav>
    
    )
}
