import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { DASHBOARD_PATH } from '../constants/paths'
import {Context} from './context'

export const ProtectedRoute = ({ children, ...rest }) => {
  let context = React.useContext(Context)
  return (
      <Route
          {...rest}
          render={
              () => {
                  return context.isAuthenticated ?
                      children :
                      <Redirect to='/' />
              }
          }
      />
  )
}

export const AuthenticatedRedirect = ({ children, ...rest }) => {
  let context = React.useContext(Context)
  return (
      <Route
          {...rest}
          render={
              () => {
                  return context.isAuthenticated ?
                      <Redirect to={DASHBOARD_PATH} /> :
                      children
              }
          }
      />
  )
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
