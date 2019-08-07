import React from 'react'
import { Switch, Route } from 'react-router-dom' 
import MainLayout from '../layouts/mainLayout'

//routes...
import homeRoute from './home'
import dashboardRoute from './dashboard'
import signupRoute from './signup'
import loginRoute from './login'
import notfoundRoute from './notfound'

export default function Routes() {
    return (
       <MainLayout>
        <Switch>
           <Route
           exact
           path={homeRoute.path}
           component={homeRoute.component}
           />
           {
               //Build routes from route settings
            [
                loginRoute,
                signupRoute,
                dashboardRoute
            ].map(
                (settings, index)=>(<Route key={`Route-${index}`} {...settings}/>)
            )

           }
           <Route component={notfoundRoute}/>
         </Switch>
       </MainLayout>
    )
}
