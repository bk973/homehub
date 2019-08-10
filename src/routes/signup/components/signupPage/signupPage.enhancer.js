import { compose, setDisplayName, withHandlers, lifecycle } from 'recompose'
import { withFirebase } from 'react-redux-firebase'

export default compose(
      setDisplayName('...'),
      withFirebase,
      withHandlers({
            googleLogin: ({firebase})=> () => {
                       firebase.login({
                             provider: 'google',
                             type: 'popup'
                       }).catch(err=>console.log(err))
            },
            emailSignup: ({firebase}) => creds => {
                         firebase.createUser(
                               creds, {
                                     email: creds.email,
                                     username: creds.username
                               }
                         ).catch(err=> console.log(err))
            }
      }),
      lifecycle({
            componentDidMount() {
                  console.log(this.props.firebase)
            }
      })
)