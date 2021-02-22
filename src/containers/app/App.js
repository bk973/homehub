import React from 'react';
import {BrowserRouter as Router, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { 
  isEmpty, 
  isLoaded, 
  useFirebase, 
  useFirestore, 
  useFirestoreConnect 
} from 'react-redux-firebase'
//context...
import { Context } from '../../utils/context'
//routes...
import Routes from '../../routes'


function App() {
  let history = useHistory()
  let firebase = useFirebase()
  let firestore = useFirestore()
  let auth = useSelector(state => state.firebase.auth)
  let isAuthenticated = isLoaded(auth) && !isEmpty(auth)
  let profile = useSelector(({ firebase: { profile } }) => profile)
  let loginWithGoogle = () => {
    try {
      firebase.login({
        provider: 'google',
        type: 'popup',
      })
    } catch (e) {
      console.log(e)
    }
  }
  let logout = async() => {
      await firebase.logout()
  }
  React.useEffect(()=>{
         console.log(firestore)
  }, [])
  return (
    <Context.Provider value={{
      auth: auth,
      userName: profile.displayName,
      avatar: profile.avatarUrl,
      isAuthenticated: isAuthenticated,
      loginWithGoogle: loginWithGoogle,
      logout: logout,
    }}>
      <Router>
        <Routes />
      </Router>
    </Context.Provider>
  );
}

export default App;
