import React from 'react'
import { Link } from 'react-router-dom'

export default function DashboardNav({ avatar, logout }) {
  return (
    <div className="flex flex-none flex-row shadow-sm p-4">
      <button className="flex block md:hidden justify-center ">
        <i className="fas fa-bars"></i>
      </button>
      <div className="flex-grow"></div>
      <button onClick={logout}>Logout</button>
      <div className="flex flex-row space-x-6">
        <button className="flex flex-none rounded-full py-1 px-2 ring-2 ring-gray-300">
          <span className="text-gray-500" ><i className="fas fa-bell fa-md"></i></span>
        </button>
        <button className="">
          <img src={avatar} alt="" className="rounded-full ring-2 ring-gray-400 h-8" />
        </button>
      </div>
    </div>
  )
}
