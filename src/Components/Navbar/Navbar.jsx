import React from 'react'
import "./style.css"
import logo from "../../Media/logo.svg";
import notification from "../../Media/notification.svg";
import grid from "../../Media/grid.svg";
import calender from "../../Media/calendar.svg";
import avatar from "../../Media/avatar.png";
function Navbar() {
  return (
    <nav className='navbar'>
      <img src={logo} class="navbarLogo" />
          <input
            type="search"
            class="search"
            placeholder="Search..."
          />
          <div class="navbarItems">
            <div class="navbarItemsContainer">
              <div class="notification"  title="Notification">
                <img src={notification} style={{cursor:"pointer"}} class="navbarItemIcon" />
              </div>
              <img src={calender} style={{cursor:"pointer"}} class="navbarItemIcon" />
              <img src={grid} style={{cursor:"pointer"}} class="navbarItemIcon"/>
            </div>
            <div class="profile">
              <img src={avatar} style={{cursor:"pointer"}}/>
            </div>
          </div>
    </nav>
  )
}

export default Navbar