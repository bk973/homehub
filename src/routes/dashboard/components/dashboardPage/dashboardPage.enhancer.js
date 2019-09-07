import { compose, 
      setDisplayName, 
      flattenProp,
      withState,
      withHandlers
 } from 'recompose'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles'
import { UserIsAuthenticated} from '../../../../utils/router'
import { firestoreConnect } from 'react-redux-firebase'
import { DASHBOARD_PATH} from '../../../../constants/paths'
import Styles from './dashboardPage.styles'

export default compose(
      setDisplayName('...'),
      UserIsAuthenticated,
      connect(({ firebase: { auth: { uid }, profile }}) => ({ uid, profile})),
      firestoreConnect(({uid}) => [
            { collection: 'listings', where: ['userId', '==', uid]}
      ]),
      connect(({firestore}) => ({
             listings: firestore.ordered.listings
      })),
      withRouter,
      withState('value', 'setValue', 0 ),
      withHandlers({
              handleChange: props => (event, newValue) => {
                          props.setValue(newValue)
              },
              logout: ({firebase, history}) => () => {
                      return firebase.logout()
                      .then(history.push('/'))
                    },
              submitForm: props => data => {
                        props.firestore.add({ collection: 'listings'}, {...data, userId: props.uid})
                        .then(props.history.push(DASHBOARD_PATH))
                        .catch(err=> console.log(err))      
            },
            deleteListing: props => listingId => {
                         props.firestore.delete({ collection: 'listings', doc: listingId })
                         .then(console.log('deleted listing successfully'))
                         .catch(err=>console.log(err))
            }
      }),
      withStyles(Styles),
      flattenProp('profile'),
)