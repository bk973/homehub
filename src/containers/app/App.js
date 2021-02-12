import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {isEmpty, isLoaded, useFirebase} from 'react-redux-firebase'
//context...
import { Context } from '../../utils/context'
//routes...
import Routes from '../../routes'


function App() {
  let firebase = useFirebase()
  let auth = useSelector(state=>state.firebase.auth)
  let isAuthenticated = isLoaded(auth) && !isEmpty(auth)
  let loginWithGoogle = () => {
  }
  return (
    <Context.Provider value={{
      auth: auth,
      isAuthenticated: isAuthenticated
    } }>
      <Router>
        <Routes />
      </Router>
    </Context.Provider>
  );
}

export default App;
