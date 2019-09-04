import { compose,setDisplayName } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import styles from './dashboardLayout.styles'

export default compose(
       setDisplayName('enhanced dashboardLayout'),
       withStyles(styles)
)