import { compose, setDisplayName } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import styles from './addPage.styles'

export default compose(
       setDisplayName('enhanced add page'),
       withStyles(styles)
)