import React from 'react'
import { Link } from 'react-router-dom'
import './sideNav.scss'

export default function sideNav() {
    return (
        <div className="">
            <div>
                <ul className="">
                <li>
                    <Link to="/dashboard" className="sidenav-link">
                        <span className="icon is-medium"><i class="fas fa-home"></i></span>
                        <span>Overview</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/pending" className="sidenav-link">
                        <span className="icon is-medium"><i class="fas fa-exclamation-circle"></i></span>
                        <span>Pending requests</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/approved" className="sidenav-link">
                        <span className="icon is-medium"><i class="fas fa-check-circle"></i></span>
                        <span>Approved requests</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/sttings" className="sidenav-link">
                        <span className="icon is-medium"><i class="fas fa-cog"></i></span>
                        <span>Settings</span>
                    </Link>
                </li>
                </ul>
            </div>
            <div>
            <ul className="">
                <li>
                    <Link to="/dashboard/history" className="sidenav-link">
                        <span className="icon is-medium"><i class="fas fa-history"></i></span>
                        <span>History</span>
                    </Link>
                </li>
                </ul>
            </div>
            <div>
            <ul className="">
                <li>
                    <Link to="/dashboard/feedback" className="sidenav-link">
                        <span className="icon is-medium"><i class="fas fa-comment-alt"></i></span>
                        <span>Feedback</span>
                    </Link>
                </li>
            </ul>
        </div>   
    </div>  
    )
}
