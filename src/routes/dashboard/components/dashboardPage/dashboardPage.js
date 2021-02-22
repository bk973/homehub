//deps
import React, { useContext, useEffect } from 'react'
import { useFirestoreConnect, useFirestore, isLoaded, isEmpty } from 'react-redux-firebase'
import { Switch, Route, useRouteMatch, Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import moment from 'moment'

//constants/paths
import { DASHBOARD_PATH } from '../../../../constants/paths'

//components
import LoadingSpinner from '../../../../sharedComponents/loadingSpinner'
import DashboardSideNav from './components/dashboardSideNav'
import DashboardNav from './components/dashboardNav'

//utils
import { Context } from '../../../../utils/context'
import { renderChildren } from '../../../../utils/router'

//routes...
import addRoute from '../../routes/add'
import discoverRoute from '../../routes/discover'

//dashboardPage component...
export default function DashboardPage() {

  let context = useContext(Context) //initialize context
  let match = useRouteMatch() //initialise match
  let firestore = useFirestore() //initialize firestore
  let uid = context.auth.uid

  //listen to currently loggedin user's listings in cloudfirestore
  useFirestoreConnect([{
    collection: 'listings',
    where: ['user_id', '==', uid]
  }])

  //get listings data from redux state
  let listings = useSelector(({ firestore }) => firestore.ordered.listings)

  //delete a single listing, can only be performed by loggedin user
  async function deleteListing(id) {
    try {
      await firestore.delete()
    } catch (e) {
      console.log(e.message)
    }
  }
  useEffect(() => {
    document.title = `Homehub.com - Dashboard`
  }, [])
  return (
    <div id="dashboard" className="flex flex-row h-full relative">

      {/**Side nav drawer, hidden on small screens, visible on medium and larger screens */}
      <DashboardSideNav />


      <div className="w-full bg-white">

        {/**
         * @prop {avatar} - The user's avatart image, got from app context.
         * @prop {logout} - The logout link, for logging out currently logged in user.
         * Top bar on dashboard page, this will render the logged in user's menu and also
         * act as the nav bar on small screens...
         */}
        <DashboardNav
          avatar={context.avatar}
          logout={context.logout}
        />
        <Switch>
          {/**Dashboard child routes... */}
          {renderChildren([addRoute, discoverRoute], match, {})}
          <Route
            exact
            path={match.path}
            render={
              () => (
                <div className="w-full p-2 md:p-6 flex flex-col space-y-6">

                  <h3 className="text-gray-500 flex space-x-2">
                    <span className="text-2xl font-light">My listings</span>
                    <span className="text-white bg-green-500 font-bold rounded-full px-4 py-2">{listings && listings.length}</span>
                  </h3>

                  <div className="grid grid-flow-col md:grid-flow-row grid-cols-1 md:grid-cols-3 gap-2 md:6">
                    {isLoaded(listings) ? listings.map(
                      (listing, index) => (
                        <Link
                          to={DASHBOARD_PATH}
                          key={`${index}-${listing.id}`}
                          id="card"
                          className="flex-col pb-4 bg-gray-50 rounded-md">


                          <div id="card-title" className="flex flex-col py-4 px-4">
                            <span className="font-medium text-gray-700">{listing.title}</span>
                            <p className="flex flex-row space-x-2 font-sm font-light text-gray-600"><span className="text-indigo-500"><i className="fas fa-map-marker-alt"></i></span><span className="font-bold text-gray-500">{listing.location}</span></p>
                          </div>

                          <div id="card-image" className="flex flex-col relative">
                            <img src={listing.fileUrls[0]} alt="" className="w-full h-48 flex-none object-cover" />
                            <span className="absolute text-red-500">{listings.fileUrls && listings.fileUrls.length}</span>
                          </div>

                          <div id="card-footer" className="flex flex-row space-x-2 px-4 py-2.5">
                            <img src={context.avatar} alt="" className="h-10 rounded-full ring-2 ring-gray-300" />
                            <div className="flex flex-col space">
                              <span className="font-light text-sm font-bold text-gray-600">{context.userName}</span>
                              <span className="text-sm text-light text-gray-500">{moment(listing.created.toDate().toDateString()).fromNow()}</span>
                            </div>

                            <div className="flex space-x-2">
                              <p className="text-red-400 flex text-sm">
                                <button className="px-2.5 text-center outline-none py-0.5 rounded-full bg-gray-100">{/*<i className="fas fa-heart"></i>*/}
                                  <i className="far fa-heart"></i>
                                </button>
                                <span id="like-count">
                                  23
                                </span>
                              </p>
                            </div>
                          </div>

                        </Link>)
                    ) :
                      <div className="flex w-3/5 p-12">
                        <LoadingSpinner />
                      </div>
                    }
                  </div>
                </div>
              )
            }
          />
        </Switch>
      </div>
    </div>
  )
}
