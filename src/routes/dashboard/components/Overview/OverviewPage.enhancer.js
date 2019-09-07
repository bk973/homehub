import {compose, setDisplayName } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import styles from './OverviewPage.styles'

export default compose(
       setDisplayName('enhaced overview component'),
       withStyles(styles)
)