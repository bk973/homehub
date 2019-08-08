import React from 'react'
import PropTypes from 'prop-types'
import './mainLayout.scss'

function mainLayout({children}) {
    return (
        <div>
          <div className="children">
            {children}  
          </div> 
        </div>
    )
}

mainLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default mainLayout

