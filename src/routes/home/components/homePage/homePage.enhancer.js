import { compose, setDisplayName, withHandlers } from 'recompose'
import { withFirebase } from 'react-redux-firebase'
import { withRouter } from 'react-router-dom'
import { UserIsNotAuthenticated} from '../../../../utils/router'


export default compose(
      setDisplayName('Enhanced homePage'),
      withFirebase,
      UserIsNotAuthenticated,
      //add props.history
      withRouter,
      withHandlers({
            googleLogin: ({firebase, history}) => () => {
                         firebase.login({ provider: 'google', type: 'popup'})
                         .catch(err=> console.log(err))
            }
      })
)