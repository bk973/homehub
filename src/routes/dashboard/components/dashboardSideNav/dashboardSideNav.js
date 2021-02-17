import React, { useContext } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { DASHBOARD_PATH } from '../../../../constants/paths'
import { Context } from '../../../../utils/context'
export default function DashboardSideNav() {
    let context = useContext(Context)
    return (
        <div className="hidden flex flex-col space-y-6 md:block w-1/6 bg-indigo-800 text-white text-sm h-screen sticky top-0">
            <div className="flex pl-4 py-4 bg-indigo-900">
                <div className="text-xl">
                    <span className="font-bolder text-gray-400">Home</span>
                    <span className="font-light text-gray-200">hub</span>
                </div>
            </div>
            <ul className="flex flex-col space-y-4">
                <li className="flex flex-row px-2">
                    <NavLink to={DASHBOARD_PATH} className="flex flex-row space-x-2 hover:bg-indigo-500 hover:font-bold  w-full px-4 py-2" activeClassName="bg-indigo-500 font-bold">
                        <span><i className="fas fa-columns fa-lg"></i></span>
                        <span>Overview</span>
                    </NavLink>

                </li>

                <li className="flex flex-row px-2">
                    <NavLink to={`${DASHBOARD_PATH}/discover`} className="flex flex-row space-x-2 hover:bg-indigo-500 hover:font-bold  w-full px-4 py-2" activeClassName="bg-indigo-500 font-bold">
                        <span><i class="fas fa-compass fa-lg"></i></span>
                        <span>Discover</span>
                    </NavLink>

                </li>

                <li className="flex flex-row px-2">
                    <NavLink to={`${DASHBOARD_PATH}/add`} className="flex flex-row space-x-2 hover:bg-indigo-500 hover:font-bold  w-full px-4 py-2" activeClassName="bg-indigo-500 font-bold">
                        <span><i className="fas fa-clipboard-list fa-lg"></i></span>
                        <span>List a property</span>
                    </NavLink>

                </li>

                <li className="flex flex-row px-2">
                    <NavLink to={`${DASHBOARD_PATH}/favorites`} className="flex flex-row space-x-2 hover:bg-indigo-500 hover:font-bold  w-full px-4 py-2" activeClassName="bg-indigo-500 font-bold">
                        <span><i className="fas fa-bookmark fa-lg"></i></span>
                        <span>Favorites</span>
                    </NavLink>

                </li>
            </ul>
            <h3 className="pl-2 py-2 bg-indigo-900">RESOURCES</h3>
            <ul className="flex flex-col space-y-4">
                <li className="flex flex-row px-2">
                    <NavLink to={`${DASHBOARD_PATH}/settings`} className="flex flex-row space-x-2 hover:bg-indigo-500 hover:font-bold  w-full px-4 py-2" activeClassName="bg-indigo-500 font-bold">
                        <span><i class="fas fa-user-cog fa-lg"></i></span>
                        <span>Settings</span>
                    </NavLink>
                </li>
                <li className="flex flex-row px-2">
                    <NavLink to={`${DASHBOARD_PATH}/Help`} className="flex flex-row space-x-2 hover:bg-indigo-500 hover:font-bold  w-full px-4 py-2" activeClassName="bg-indigo-500 font-bold">
                        <span><i class="fas fa-hands-helping fa-lg"></i></span>
                        <span>Get help</span>
                    </NavLink>
                </li>
                <li className="flex flex-row px-2">
                    <NavLink to={`${DASHBOARD_PATH}/Feedback`} className="flex flex-row space-x-2 hover:bg-indigo-500 hover:font-bold  w-full px-4 py-2" activeClassName="bg-indigo-500 font-bold">

                        <span><i class="fas fa-comment-alt fa-lg"></i></span>
                        <span>Feedback</span>
                    </NavLink>
                </li>
            </ul>
        </div>
    )
}
