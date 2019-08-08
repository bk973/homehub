import { compose, withHandlers, flattenProp } from 'recompose'
import { connect } from 'react-redux'
import { withFirebase } from 'react-redux-firebase'
import { LOGIN_PATH } from '../../constants/paths'

export default compose(
    withFirebase,
    connect(
          ({ firebase: { profile }}) => ({ profile})
    ),
    withHandlers({
          logout: ({firebase, history}) => {
                firebase.logout()
                history.push(LOGIN_PATH)
          }
    }),
    flattenProp('profile')
)