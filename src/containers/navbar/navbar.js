import React from 'react'
import LoginMenu from './components/loginMenu'
import AccountMenu from './components/accountMenu'

export default function navbar({
    firebase, 
    auth,
    authExists, 
    profile, 
    avatarUrl, 
    logout,
    displayName}) {
        return(
            <div>
            {
             authExists?
             (
                <AccountMenu
                avatarUrl={avatarUrl}
                displayName={displayName}
                logout={logout}
                />
             ):(
                <LoginMenu/>
             )
            }
        </div>
        )  
    }
