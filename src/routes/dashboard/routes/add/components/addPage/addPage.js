import React from 'react'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'

import AddForm from './components/addForm'

function addPage(props) {
    const { classes } = props
   
    return (
        <div className={classes.root}>
          <Typography>
            Add a property to the market place
          </Typography>
          <AddForm/>
        </div>
    )
}

addPage.propTypes = {

}

export default addPage

