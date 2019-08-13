import { compose, 
      setDisplayName, 
      flattenProp,
      withState,
      withHandlers
 } from 'recompose'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { UserIsAuthenticated} from '../../../../utils/router'
import { firestoreConnect } from 'react-redux-firebase'
import { DASHBOARD_PATH} from '../../../../constants/paths'


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
      withState('open', 'setOpen', false),
      withHandlers({
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
      flattenProp('profile'),
)