import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../../containers/navbar'

function mainLayout({children}) {
    return (
        <div>
          <Navbar/>
         {children}   
        </div>
    )
}

mainLayout.propTypes = {
  children: PropTypes.element.isRequired
}

export default mainLayout

