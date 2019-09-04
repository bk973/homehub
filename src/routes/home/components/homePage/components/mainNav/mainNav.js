import React from 'react'
import { Link } from 'react-router-dom'


function MainNav() {
    return (
<nav className="navbar navbar-custom" role="navigation" aria-label="main navigation">
  <div className="navbar-brand">
    <Link to="/" className="navbar-item">
      HomeHub
    </Link>
  </div>
  <div className="navbar-end">
      <div className="navbar-item">
       
      </div>
    </div>
</nav>
    )
}

export default MainNav
