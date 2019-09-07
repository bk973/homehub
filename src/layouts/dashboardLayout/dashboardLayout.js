import React from 'react'
import AppBar from './components/appBar'

export default function DashboardLayout({
   children, 
   logout, 
   displayName,
   avatarUrl,
   classes
}) {
    return (
       <div className={classes.root}>
          <AppBar
          avatarUrl={avatarUrl}
          logout={logout}
          displayName={displayName}
          />
          <div className={classes.children}>
             {children}
          </div>
       </div>
    )
}
