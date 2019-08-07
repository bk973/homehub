import { compose, setDisplayName, flattenProp, withProps, withHandlers } from 'recompose'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { withFirebase, isLoaded, isEmpty } from 'react-redux-firebase'


export default compose(
       setDisplayName('...'),
       withRouter,
       //add props.firebase
       withFirebase,
       connect(
           ({firebase:{ auth, profile }}) => ({
               auth,
               profile
           })
       ),
       withHandlers({
           logout: ({firebase, history}) => {
               firebase.logout()
               history.push('/login')

           }
       }),
       withProps(
           ({auth}) => ({
               authExists: isLoaded(auth) && !isEmpty(auth)
           })
       ),
       //flatten props.profile so that avatarUrl and displayName exist as props
       flattenProp('profile')
)