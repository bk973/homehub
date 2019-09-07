import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress'


export default function loadingSpinner({classes}) {
    return (
           <div className={classes.root}>
              <CircularProgress className={classes.progress} />
           </div>
    )
}
