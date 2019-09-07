import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { renderChildren} from '../../../../utils/router'
import { isEmpty } from 'react-redux-firebase'
import Typography from '@material-ui/core/Typography'
import Card from '@material-ui/core/Card'
import DashboardLayout from '../../../../layouts/dashboardLayout'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import _tabProps from '../../../../utils/tabs'
import Container from '@material-ui/core/Container'

import TabPanel from './components/TabPanel'

//routes...
import addRoute from '../../routes/add'


export default function dashboardPage({
       classes,
       firebase,
       firestore,
       profile,
       listings,
       deleteListing,
       submitForm,
       auth,
       uid,
       displayName,
       avatarUrl,
       logout,
       match,
       value,
       setValue,
       handleChange
}) {

    return (
<DashboardLayout 
logout={logout} 
avatarUrl={avatarUrl} 
displayName={displayName}>
  <Switch>
      { renderChildren([addRoute], match, {auth})}
      <Route
      exact
      path={match.path}
      render={
        () => ( 
        <div className={classes.root}>
           <Tabs
           value={value}
           indicatorColor="primary"
           onChange={handleChange}
           textColor="primary"
           centered
           >
            <Tab label="Overview" {..._tabProps(0)}/>
            <Tab label="Account" {..._tabProps(1)}/>
            <Tab label="History" {..._tabProps(2)}/>
            <Tab label="Favorites"  {..._tabProps(3)}/>
            <Tab label="Archived" {..._tabProps(4)}/>

           </Tabs>

           <Container className={classes.tabPanel}>
                <TabPanel value={value} index={0}>
                  <Typography>Overview</Typography>
                </TabPanel>

                <TabPanel value={value} index={1}>
                <Typography>Account</Typography>
                  </TabPanel>

                  <TabPanel value={value} index={2}>
                  <Typography>History</Typography>
                  </TabPanel>

                  <TabPanel value={value} index={3}>
                  <Typography>Favorites</Typography>
                  </TabPanel>

                  <TabPanel value={value} index={4}>
                  <Typography>Archived</Typography>
                  </TabPanel>
           </Container>
          
        </div>)
      }
      />
    </Switch>
 
</DashboardLayout>
    )
}
