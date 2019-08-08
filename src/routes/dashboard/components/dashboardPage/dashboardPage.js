import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { renderChildren} from '../../../../utils/router'

//dashboard routes...
import approvedRoute from '../../routes/approved'
import feedbackRoute from '../../routes/feedback'
import historyRoute from '../../routes/history'
import pendingRoute from '../../routes/pending'
import settingsRoute from '../../routes/settings'
//
import DashboardLayout from '../../../../layouts/dashboardLayout'
import './dashboardPage.scss'
export default function dashboardPage({
       firebase,
       profile,
       auth,
       displayName,
       avatarUrl,
       logout,
       match
}) {
    return (
      <DashboardLayout>
        <Switch>
          { /**child routes of dashboard route */}
          { 
            renderChildren([
              approvedRoute,
              feedbackRoute,
              historyRoute,
              pendingRoute,
              settingsRoute
            ], match, { auth })
          }
          <Route
          exact
          path={match.url}
          render={
            ()=>(
              <div className="">
                <div className="box welcome-banner">
                 <article>
                  <h4 className="title is-4">Welcome to HomeHub, {displayName}</h4>
                  <p className="subtitle is-6">euhrufhurhufrhufrufurfhur</p>
                  <button className="button is-primary"> Start Your Journey</button>
                 </article>
                </div>
                <div className="box">
                   <h4 className="title is-4">Analytics</h4>
                </div>
             </div>
            )
          }
          />
        </Switch>
      </DashboardLayout>
    )
}
