import React from 'react'
import Accountmenu from '../accountMenu'
import Sidenav from '../sideNav'
import './dashboardLayout.scss'

export default function DashboardLayout({children, logout, displayName}) {
    return (
       <React.Fragment>
           <Accountmenu
           logout={logout}
           displayName={displayName}
           />
           <div className="columns">
            <div className="column sidenav is-one-fifth">
              <Sidenav/>
            </div> 
            <div className="column children">
                {children}
            </div> 
           </div>
       </React.Fragment>
    )
}
