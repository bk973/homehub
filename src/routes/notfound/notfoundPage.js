import React from 'react'
import { ReactComponent as Notfoundsvg } from '../../static/not_found.svg'
import { Link } from 'react-router-dom'

export default function notfoundPage() {
    return (
       <React.Fragment>
           <div className="">
               <div className=""></div>
               <div className="">
                   <Notfoundsvg width="400" height="200"/>
                   <p className="title is-4">
                       OOoops! Page not found
                   </p>
                   <Link to="/">Back to home</Link>
               </div>
               <div className=""></div>
           </div>
       </React.Fragment>
    )
}
