import React from 'react'
import AccountMenu from './components/accountMenu'
import SideNav from './components/sideNav'
import './dashboardLayout.scss'


export default function dashboardLayout({
    children,
    profile,
    avatarUrl,
    displayName,
    logout
}) {
    return (
        <div >
            <AccountMenu
            avatarUrl={avatarUrl}
            displayName={displayName}
            logout={logout}
            />
            <div className="container is-fluid">
            <div className="columns">
              <div className="column is-one-quarter">
                 <SideNav/>
              </div>
              <div className="column">
                  {children}
               </div>  
            </div>
            </div>
        </div>  
    )
}
