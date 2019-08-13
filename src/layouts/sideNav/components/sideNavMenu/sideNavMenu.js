import React from 'react'
import { Link } from 'react-router-dom'

export default function sideNavMenu() {
    return (
        <aside className="menu">
                <ul className="menu-list">
                <li>
                    <Link to="/dashboard">
                        <span className="icon is-medium"><i className="fas fa-home"></i></span>
                        <span>Overview</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/list">
                        <span className="icon is-medium"><i className="fas fa-plus"></i></span>
                        <span>List a home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/favorites">
                        <span className="icon is-medium"><i className="fas fa-star"></i></span>
                        <span>Favorites</span>
                    </Link>
                </li>
                </ul>
            <p className="menu-label">Resources</p>
            <ul className="menu-list">
                <li>
                    <Link to="/dashboard/settings">
                        <span className="icon is-medium"><i className="fas fa-cog"></i></span>
                        <span>Settings</span>
                    </Link>
                </li>
                <li>
                    <Link to="/dashboard/feedback">
                        <span className="icon is-medium"><i className="fas fa-comment-alt"></i></span>
                        <span>Feedback</span>
                    </Link>
                </li>
                <li>
                      <Link to="">
                        <span className="icon is-medium"><i className="fas fa-bell fa-lg"></i></span>
                        <span>Get help</span>
                      </Link>
                </li>
            </ul> 
    </aside>  
    )
}
