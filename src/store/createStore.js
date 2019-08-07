import { createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import firebase from 'firebase/app'
import { createFirestoreInstance } from 'redux-firestore'
import 'firebase/auth'
import 'firebase/firestore'
import rootReducer from './reducers'
import { firebaseConfig} from '../config'

const initialState = {}
const middleware = [
       thunk
]

const rrfConfig = { 
       userProfile: 'users',
       useFirestoreForProfile: true
} 

firebase.initializeApp(firebaseConfig)
firebase.firestore()

const store = createStore(
       rootReducer,
       initialState,
       compose( 
       applyMiddleware(...middleware)
      )   
)

export const rrfProps = {
       firebase,
       config: rrfConfig,
       dispatch: store.dispatch,
       createFirestoreInstance
}

export default store