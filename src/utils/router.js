import React from 'react'
import { Route } from 'react-router-dom'
import { DASHBOARD_PATH } from '../constants/paths'
import {Context} from './context'


export function PrivateRoute({children, ...rest}){
  //protect routes from being accessed by users who are not authenticated...
  let context = React.useContext(Context);
  
}

export function AuthenticatedRedirect(){
  //redirect user if authenticated, useful for login page...
}
/**
 * Render children based on route config objects
 * @param {Array} routes - Routes settings array
 * @param {Object} match - Routes settings array
 * @param {Object} parentProps - Props to pass to children from parent
 */
export function renderChildren(routes, match, parentProps) {
  return routes.map(route => (
    <Route
      key={`${match.url}-${route.path}`}
      path={`${match.url}/${route.path}`}
      render={props => <route.component {...parentProps} {...props} />}
    />
  ))
}
