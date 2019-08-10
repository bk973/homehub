import React from 'react'

let dialog = ({children, toggleDialog, closeDialog}) => {
    const openDialog = toggleDialog? "modal is-active":"modal"
    return (
        <div className={openDialog}>
           <div className="modal-background"></div>
             <div className="modal-content">
                { children }
             </div>
            <button onClick={closeDialog} className="modal-close is-large" aria-label="close"></button>
        </div>
    )
}

export default dialog
