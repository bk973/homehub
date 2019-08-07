import { compose, setDisplayName } from 'recompose'
import { UserIsAuthenticated} from '../../../../utils/router'

export default compose(
      setDisplayName('...'),
      UserIsAuthenticated,
)