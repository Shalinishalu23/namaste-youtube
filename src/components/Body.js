import React from 'react'
// import MainContainer from './MainContainer'
import SideBar from './Sidebar'
import { Outlet } from 'react-router-dom'

const Body = () => {
  return (
    <div className='flex'>
      <SideBar />
      {/* <MainContainer /> use this before router */}
      <Outlet />
    </div>
  )
}

export default Body