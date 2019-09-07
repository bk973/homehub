import { compose, setDisplayName, withHandlers } from 'recompose'
import { firestoreConnect } from 'react-redux-firebase'
import { withStyles } from  '@material-ui/core/styles'
import styles from './addForm.styles'

export default compose(
       setDisplayName(' enhaced addForm'),
       firestoreConnect(['listings']),
       withHandlers({
          handleForm: props => newInstance => {
                    props.firestore.add(
                        { collection: 'listings'},
                        {...newInstance}
                    )
          }
       }),
       withStyles(styles)
)