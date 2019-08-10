import React from 'react'
import { Link } from 'react-router-dom'
import './mainNav.scss'

function MainNav() {
    return (
<nav class="navbar" role="navigation" aria-label="main navigation">
  <div class="navbar-brand">
    <Link class="navbar-item" href="https://bulma.io">
    </Link>

    <Link role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
      <span aria-hidden="true"></span>
    </Link>
  </div>
</nav>
    )
}

export default MainNav
