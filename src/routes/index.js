import React from 'react'
import { Switch, Route } from 'react-router-dom' 

//routes...
import homeRoute from './home'
import discoverRoute from './discover'
import dashboardRoute from './dashboard'
import notfoundRoute from './notfound'

export default function Routes() {
    return (
        <Switch>
           <Route
           exact
           path={homeRoute.path}
           component={homeRoute.component}
           />
           {
               //Build routes from route settings
            [   
                discoverRoute,
                dashboardRoute
            ].map(
                (settings, index)=>(<Route key={`Route-${index}`} {...settings}/>)
            )

           }
           <Route component={notfoundRoute}/>
         </Switch>
    )
}
