import React from 'react'
import PropTypes from 'prop-types'
import Toolbar from '@material-ui/core/Toolbar'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'

import Notifications from '@material-ui/icons/Notifications'
import Add from '@material-ui/icons/Add'

function appBar({
    classes, 
    avatarUrl,
    logout,
    displayName
}) {
    return (
    <AppBar position="static" className={classes.root}>
        <Toolbar>
            <Avatar className={classes.avatar}>H</Avatar>
           <Typography>Homehub</Typography>
           <div className={classes.spacer}></div>
           <IconButton>
               <Add/>
           </IconButton>
           <IconButton>
               <Notifications/>
           </IconButton>
          <Avatar alt="" src={avatarUrl} className={classes.avatar}/>
        </Toolbar>
     </AppBar>
    )
}

appBar.propTypes = {
    logout: PropTypes.func.isRequired,
    classes: PropTypes.object.isRequired
}

export default appBar

