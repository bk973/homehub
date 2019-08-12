import React from 'react'
import { Link } from 'react-router-dom'
import './footer.scss'

function Footer() {
    return (
        <footer class="footer">
        <div class="content has-text-centered">
          <p>
            <strong>
              <Link className="link" to="">Blog</Link>
            </strong>
            <strong>
              <Link className="link" to="">About</Link>
            </strong>
            <strong>
              <Link className="link" to="">FAQ</Link>
            </strong>
            <strong>
              <Link className="link" to="">Get help</Link>
            </strong>
          </p>
          <p>
            <span className="icon is-large"><i className="fab fa-facebook fa-lg"></i></span>
            <span className="icon is-large"><i className="fab fa-twitter fa-lg"></i></span>
          </p>
          <p>(c)2019. Homehub inc,</p>
        </div>
      </footer>
    )
}

export default Footer
