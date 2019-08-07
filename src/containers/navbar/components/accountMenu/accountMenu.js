import React from 'react'
import { Link } from 'react-router-dom'
import './accountMenu.scss'

export default function accountMenu({avatarUrl, displayName, logout}) {
    return (
        <nav className="navbar" role="navigation" aria-label="dropdown navigation">
            <div className="container isfluid">
            <div className="navbar-brand">
                  <Link className="navbar-item" to="/">HomeHub</Link>
            </div>
            <div className="navbar-end">
                  <div className="navbar-item has-dropdown is-hoverable">
                     <Link className="navbar-link">
                        <img width="30" height="32" className="avatar" alt="" src={avatarUrl}/>
                     </Link>
                     <div className="navbar-dropdown is-right is-boxed">
                        <Link className="navbar-item">Help</Link>
                        <Link className="navbar-item">Settings</Link>
                        <hr className="navbar-divider"></hr>
                     </div>
                  </div>
            </div>
            </div>
        </nav>
    )
}
