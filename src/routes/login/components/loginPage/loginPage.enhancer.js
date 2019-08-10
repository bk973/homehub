import { compose, setDisplayName, withHandlers } from 'recompose'
import { withFirebase } from 'react-redux-firebase'
import { UserIsNotAuthenticated } from '../../../../utils/router'

export default compose(
      setDisplayName('...'),
      // redirect to dashboard if user is already logged in
      UserIsNotAuthenticated,
      //Add props.firebse
      withFirebase,
      withHandlers({
            googleLogin: ({ firebase}) => e => {
                  firebase.login({ provider: 'google', type: 'popup'})
                  .catch(err => console.log(err))
            }
      })
)