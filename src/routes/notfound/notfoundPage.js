import React from 'react'
import { ReactComponent as Notfoundsvg } from '../../static/not_found.svg'
import { Link } from 'react-router-dom'
import './notfound.scss'

export default function notfoundPage() {
    return (
       <React.Fragment>
           <div className="columns">
               <div className="column"></div>
               <div className="column wrapper">
                   <Notfoundsvg width="400" height="200"/>
                   <p className="title is-4">
                       OOoops! Page not found
                   </p>
                   <Link to="/">Back to home</Link>
               </div>
               <div className="column"></div>
           </div>
       </React.Fragment>
    )
}
