import React from 'react'
import { Link } from 'react-router-dom'
import './sideNav.scss'

export default function sideNav() {
    return (
        <aside className="menu">
                <ul className="menu-list">
                <li>
                    <Link to="/dashboard">
                        <span className="icon is-medium"><i class="fas fa-home"></i></span>
                        <span>Overview</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/pending">
                        <span className="icon is-medium"><i class="fas fa-exclamation-circle"></i></span>
                        <span>Pending requests</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/approved">
                        <span className="icon is-medium"><i class="fas fa-check-circle"></i></span>
                        <span>Approved requests</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/history">
                        <span className="icon is-medium"><i class="fas fa-history"></i></span>
                        <span>History</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/sttings">
                        <span className="icon is-medium"><i class="fas fa-cog"></i></span>
                        <span>Settings</span>
                    </Link>
                </li>
                </ul>
            <p className="menu-label">Resources</p>
            <ul className="menu-list">
                <li>
                    <Link to="/dashboard/feedback">
                        <span className="icon is-medium"><i class="fas fa-comment-alt"></i></span>
                        <span>Feedback</span>
                    </Link>
                </li>
            </ul> 
    </aside>  
    )
}
