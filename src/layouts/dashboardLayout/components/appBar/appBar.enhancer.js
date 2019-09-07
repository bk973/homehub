import { compose, setDisplayName } from 'recompose'
import { withStyles } from '@material-ui/core/styles'
import styles from './appBar.styles'

export default compose(
        setDisplayName('enhanced appBar'),
        withStyles(styles)
)
