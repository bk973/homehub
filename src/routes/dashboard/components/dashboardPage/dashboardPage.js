import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { renderChildren} from '../../../../utils/router'
import { isEmpty } from 'react-redux-firebase'

import DashboardLayout from '../../../../layouts/dashboardLayout'

//dashboard routes...
import feedbackRoute from '../../routes/feedback'
import favoritesRoute from '../../routes/favorites'
import listRoute from '../../routes/list'
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
      <DashboardLayout logout={logout}>
         <Switch>
          { /**child routes of dashboard route */}
          { 
            renderChildren([
              feedbackRoute,
              favoritesRoute,
              listRoute,
              settingsRoute
            ], match, { uid, listings, submitForm })
          }
          <Route
          exact
          path={match.url}
          render={
            ()=>(
              <div className="">
                <div className="welcome-banner">
                 <article>
                    <h4 className="title is-4">My Listings</h4>
                    <p className="subtitle is-6"></p>
                 </article>

                   <div className="columns is-multiline">
                   { !isEmpty(listings)&&listings.map(
                     (listing, index) => (
                         <div key={`index-${listing.id}`} className="column card listing is-two-fifths">
                             <p className="title is-6">{listing.title}</p>
                             <p className="subtitle is-6">{listing.description}</p>
                             <p className="location">
                               <span className="icon is-medium"><i className="fas fa-map-marker"></i></span>
                               <span>{listing.location}</span>
                             </p>
                             <p>UGX<strong className="price">{listing.currentPrice}</strong></p>
                             <div className="buttons">
                               <button className="button">
                                 <span className="icon"><i className="fas fa-pen"></i></span>
                                 <span>Edit</span>
                              </button>
                               <button onClick={() => {deleteListing(listing.id)}} className="button">
                                 <span className="icon"><i className="fas fa-trash-alt"></i></span>
                                 <span>Delete</span>
                               </button>
                             </div>
                         </div>
                     )
                   )}
                   </div>
              </div>
             </div>
            )
            }
          />
        </Switch>
      </DashboardLayout>
    )
}
