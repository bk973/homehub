import React from 'react'
import { Link }  from 'react-router-dom'

export default function accountMenu({
  avatarUrl, 
  displayName, 
  open,
  setOpen,
  toggleMenu,
  closeMenu,
  logout}) {

    let dropdownClassName = ''

    open? dropdownClassName = 'navbar-item dropdown is-active is-right '
     : dropdownClassName = 'navbar-item dropdown'
    

    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
          <div class="navbar-brand">
            <Link class="navbar-item" href="/">
               Homehub
            </Link>
         </div>
         <div className="navbar-end">
             <Link className="navbar-item">
             </Link>
             <Link className="navbar-item">

             </Link>
            <div className={dropdownClassName}>
               <div className="dropdown-trigger">
                 <button onClick={toggleMenu} className="button" aria-haspopup="true" aria-controls="dropdown-menu">
                   Drop
                </button>
               </div>
               <div className="dropdown-menu" id="dropdown-menu" role="menu">
                 <div className="dropdown-content">
                   <Link onClick={logout} className="dropdown-item">Logout</Link>
                 </div>
               </div>
            </div>
         </div>
    </nav>
        )
}
