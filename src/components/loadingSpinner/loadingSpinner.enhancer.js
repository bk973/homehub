import { compose, setDisplayName } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import styles from './loadingSpinner.styles'

export default compose(
       setDisplayName('ehanced loadingSpinner'),
       withStyles(styles)
)