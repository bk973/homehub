import { compose, setDisplayName, flattenProp } from 'recompose'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { UserIsAuthenticated} from '../../../../utils/router'
import { withFirebase } from 'react-redux-firebase'

export default compose(
      setDisplayName('...'),
      withRouter,
      UserIsAuthenticated,
      withFirebase,
      connect(
            ({ firebase: { auth, profile }}) => ({ auth, profile})
      ),
      flattenProp('profile')
)