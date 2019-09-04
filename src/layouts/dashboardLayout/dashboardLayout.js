import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import IconButton from '@material-ui/core/IconButton'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

//icons...
import AccountCircle from '@material-ui/icons/AccountCircle'
import Notifications from '@material-ui/icons/Notifications'
import Add from '@material-ui/icons/Add'
import History from '@material-ui/icons/History'
import Home from '@material-ui/icons/Home'
import Archive from '@material-ui/icons/Archive'
import Assessment from '@material-ui/icons/Assessment'

export default function DashboardLayout({
   children, 
   logout, 
   displayName,
   avatarUrl,
   classes
}) {
    return (
       <div>
          <CssBaseline>
           <AppBar className={classes.appbar}>
              <Toolbar>
                 <Typography variant="h6">
                   Dashboard
                 </Typography>
                 <div className={classes.spacer}></div>
                 <IconButton>
                    <Add/>
                 </IconButton>
                 <IconButton>
                    <Notifications/>
                 </IconButton>
                 <IconButton>
                    <AccountCircle/>
                 </IconButton>
              </Toolbar>
           </AppBar>

           <Drawer 
           className={classes.drawer} 
           variant="permanent"
           classes={{
            paper: classes.drawerPaper,
            }}
           anchor="left"
           >
               <div className={classes.toolbar} />
              <List>
                 <ListItem>
                    <IconButton>
                       <Home/>
                    </IconButton>
   
                 </ListItem>
                 <ListItem>
                    <IconButton>
                       <Assessment/>
                    </IconButton>
                 </ListItem>
                
                 <ListItem>
                    <IconButton>
                        <History/>
                    </IconButton>
                 </ListItem>
                 <ListItem>
                    <IconButton>
                       <Archive/>
                    </IconButton>
                 </ListItem>
              </List>
           </Drawer>


           <main className={classes.content}>
              <div className={classes.toolbar}></div>
               {children}
           </main>
          </CssBaseline>
       </div>
    )
}
