import React from 'react'
import { Link } from 'react-router-dom'
import './accountMenu.scss'

export default function accountMenu({
  avatarUrl, 
  displayName, 
  open,
  setOpen,
  logout}) {

    return (
        <nav className="navbar account-menu" role="navigation" aria-label="dropdown navigation">
            <div className="navbar-brand">
              <Link className="navbar-item" to="/">Homehub</Link>
            </div>
                <Link className="navbar-item" to="">Discover</Link>
            <div className="navbar-end">
                  <div className="navbar-item">
                      <Link to="">
                        <span className="icon is-medium"><i className="fas fa-question-circle fa-lg"></i></span>
                      </Link>
                  </div>
                  <div className="navbar-item">
                     <div className=" dropdown is-hoverable is-right">
                         <div className="dropdown-trigger">
                           <button className="button account-menu" aria-haspopup="true" aria-controls="dropdown-menu">
                             <span className="icon is-medium"><i className="fas fa-user-circle fa-lg"></i></span>
                           </button>
                         </div>
                         <div className="dropdown-menu" id="dropdown-menu" role="menu">
                           <div className="dropdown-content">
                             <div className="dropdown-item">
                                <p>{displayName}</p>
                                <p>Admin</p>
                             </div>
                            <hr className="dropdown-divider"></hr>
                            <Link to="" className="dropdown-item">Profile</Link>
                            <button className="dropdown-item logout-button" onClick={logout}>Logout</button>
                           </div>
                         </div>
                     </div>
                  </div>
            </div>
        </nav>
    )
}
