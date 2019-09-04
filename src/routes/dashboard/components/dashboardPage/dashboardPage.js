import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { renderChildren} from '../../../../utils/router'
import { isEmpty } from 'react-redux-firebase'

import DashboardLayout from '../../../../layouts/dashboardLayout'

//dashboard routes...
import feedbackRoute from '../../routes/feedback'
import favoritesRoute from '../../routes/favorites'
import addRoute from '../../routes/add'
import settingsRoute from '../../routes/settings'


export default function dashboardPage({
       firebase,
       firestore,
       profile,
       listings,
       deleteListing,
       submitForm,
       uid,
       displayName,
       avatarUrl,
       logout,
       match,
}) {
    return (
      <DashboardLayout
       logout={logout}
       avatarUrl={avatarUrl}
       displayName={displayName}
       >
         <Switch>
          { /**child routes of dashboard route */}
          { 
            renderChildren([
              feedbackRoute,
              favoritesRoute,
              addRoute,
              settingsRoute
            ], match, { uid, listings, submitForm })
          }
          <Route
          exact
          path={match.url}
          render={
            ()=>(
              <div>
              { !isEmpty(listings)&&listings.map(
                (listing, index) => (
                    <div key={`index-${listing.id}`}>
                        <p>{listing.title}</p>
                        <p>{listing.description}</p>
                        <p>
                          <span>{listing.location}</span>
                        </p>
                        <p>{listing.currentPrice}</p>
                        <div>
                          <button>
                            <span>Edit</span>
                         </button>
                          <button onClick={() => {deleteListing(listing.id)}}>
                            <span>Delete</span>
                          </button>
                        </div>
                    </div>
                )
              )}
              </div>
            )
            }
          />
        </Switch>
      </DashboardLayout>
    )
}
