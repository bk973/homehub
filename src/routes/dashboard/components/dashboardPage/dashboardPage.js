import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { renderChildren} from '../../../../utils/router'

import AccountMenu from '../accountMenu'
import Sidenav from '../sideNav'

//dashboard routes...
import approvedRoute from '../../routes/requests'
import feedbackRoute from '../../routes/feedback'
import historyRoute from '../../routes/history'
import requestsRoute from '../../routes/requests'
import settingsRoute from '../../routes/settings'

import './dashboardPage.scss'

export default function dashboardPage({
       firebase,
       profile,
       auth,
       displayName,
       avatarUrl,
       logout,
       match,
}) {
    return (
      <div>
        <AccountMenu
        logout={logout}
        />
        <div className="section-wrapper">
        <div className="columns">
          <div className="column"><Sidenav/></div>
          <div className="column is-four-fifths">
          <Switch>
          { /**child routes of dashboard route */}
          { 
            renderChildren([
              approvedRoute,
              feedbackRoute,
              historyRoute,
              requestsRoute,
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
                    <h4 className="title is-4">Hi, {displayName}</h4>
                     <p className="subtitle is-6"></p>
                    <button className="button is-primary"> Start Your Journey</button>
                 </article>
                </div>
                <div className="box">
                  <p>
                    <span className="icon is-large"><i class="fas fa-tachometer-alt fa-lg"></i></span>
                    <span className="title is-4">Analytics</span>
                  </p>
                </div>
             </div>
            )
          }
          />
        </Switch>
          </div>
        </div>
        </div>
      </div>
    )
}
