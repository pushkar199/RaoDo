import React from 'react'
import Sidebar from '../Components/Sidebar/Sidebar'
import Home from '../Components/Home/Home'
function Dashboard() {
  return (
    <div className='Dashboard'>
       <Sidebar/>
       <Home/>
    </div>
  )
}

export default Dashboard