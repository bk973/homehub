import {
    compose,
    setDisplayName,
    withState,
    withHandlers
} from 'recompose'

export default compose(
       setDisplayName('.../'),
       withState('open','setOpen',false),
       withHandlers({
           handleMenu: props => e =>{
            props.setOpen(!props.open)
            return props.setOpen
           } 
       })
)