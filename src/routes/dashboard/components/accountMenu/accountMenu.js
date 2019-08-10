import React from 'react'
import { Link } from 'react-router-dom'
import './accountMenu.scss'

export default function accountMenu({
  avatarUrl, 
  displayName, 
  open,
  setOpen,
  handleMenu,
  logout}) {

    let dropdownClass = open? "dropdown is-active is-right":"dropdown"

    return (
        <nav className="navbar account-menu" role="navigation" aria-label="dropdown navigation">
            <div className="navabr-start">
              <div className="navbar-item">
              </div>
            </div>
            <div className="navbar-end">
                  <div className="navbar-item">
                      <Link>
                        <span className="icon is-medium"><i class="fas fa-question-circle fa-lg"></i></span>
                      </Link>
                  </div>
                  <div className="navbar-item">
                     <div className={dropdownClass}>
                         <div className="dropdown-trigger">
                           <button onClick={handleMenu} className="button account-menu" aria-haspopup="true" aria-controls="dropdown-menu">
                             <span className="icon is-medium"><i class="fas fa-user-circle fa-lg"></i></span>
                           </button>
                         </div>
                         <div className="dropdown-menu" id="dropdown-menu" role="menu">
                           <div className="dropdown-content">
                             <div className="dropdown-item">
                                <p>{displayName}</p>
                                <p>Admin</p>
                             </div>
                            <hr class="dropdown-divider"></hr>
                            <Link className="dropdown-item">Profile</Link>
                            <button className="dropdown-item logout-button" onClick={logout}>Logout</button>
                           </div>
                         </div>
                     </div>
                  </div>
            </div>
        </nav>
    )
}
