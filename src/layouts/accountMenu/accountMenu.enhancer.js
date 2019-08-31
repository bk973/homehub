import {
    compose,
    setDisplayName,
    withHandlers,
    withState,
} from 'recompose'

export default compose(
       setDisplayName('.../'),
       withState( 'open', 'setOpen', false),
       withHandlers({
           toggleMenu: props => () => {
                     props.setOpen(!props.open)
           }
       })
)