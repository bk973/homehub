import { compose, 
      setDisplayName, 
      flattenProp,
      withState,
      withHandlers
 } from 'recompose'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { UserIsAuthenticated} from '../../../../utils/router'
import { withFirebase } from 'react-redux-firebase'
import { LOGIN_PATH } from '../../../../constants/paths'

export default compose(
      setDisplayName('...'),
      withRouter,
      UserIsAuthenticated,
      withFirebase,
      connect(
            ({ firebase: { auth, profile }}) => ({ auth, profile})
      ),
      withState('open', 'setOpen', false),
      withHandlers({
              logout: ({firebase, history}) => () => {
                      return firebase.logout()
                      .then(history.push(LOGIN_PATH))
                    
              }
      }),
      flattenProp('profile')
)