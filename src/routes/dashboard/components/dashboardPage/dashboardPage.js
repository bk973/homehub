import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { renderChildren} from '../../../../utils/router'
import { isEmpty } from 'react-redux-firebase'
//routes...
import addRoute from '../../routes/add'
//dashboardPage component...
export default function DashboardPage() {
    let match = useRouteMatch() //initialise match
    return (
  <Switch>
      { renderChildren([addRoute], match, {})}
      <Route
      exact
      path={match.path}
      render={
        () => ( 
          <div>
            dashboard
          </div>
        )
      }
      />
    </Switch>
    )
}
