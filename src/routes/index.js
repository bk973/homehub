import React from 'react'
import { Switch, Route } from 'react-router-dom'
import {ProtectedRoute, AuthenticatedRedirect } from '../utils/router' 

//routes...
import homeRoute from './home'
import loginRoute from './login'
import discoverRoute from './discover'
import dashboardRoute from './dashboard'
import notfoundRoute from './notfound'

export default function Routes() {
    return (
        <Switch>
           <AuthenticatedRedirect
           exact
           path={homeRoute.path}
           >
               <homeRoute.component/>
           </AuthenticatedRedirect>
           />
           <AuthenticatedRedirect path={loginRoute.path}>
               <loginRoute.component/>
           </AuthenticatedRedirect>
           <ProtectedRoute path={discoverRoute.path}>
               <discoverRoute.component/>
           </ProtectedRoute>
           <ProtectedRoute path={dashboardRoute.path}>
               <dashboardRoute.component/>
           </ProtectedRoute>
           <Route component={notfoundRoute}/>
         </Switch>
    )
}
