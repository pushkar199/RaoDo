import React, { useState } from 'react';
import './style.css';
import logo from "../../Media/Logo.png";
import dashboard from "../../Media/dashboard-icon.svg";
import envelope from "../../Media/envelope.svg";
import friends from "../../Media/friends.svg";
import help from "../../Media/help-center.svg";
import apps from "../../Media/apps.svg";
import settings from "../../Media/settings.svg";
import logout from "../../Media/logout.svg";
import globe from "../../Media/globe.svg";
import file from "../../Media/file-manager.svg";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

function Sidebar() {
    const [active, setActive] = useState("Dash");
    const [openMenu, setOpenMenu] = useState("");
    const toggleMenu = (menuItem) => {
        setActive(menuItem);
        setOpenMenu(openMenu === menuItem ? "" : menuItem);
    };

    return (
        <div className='sidebar'>
            <div className='sidebarContainer'>
                <img src={logo} className="sidebarlogo" />
                <div className='menu'>
                    <div className='menuSection'>
                        <div className="menuTitle">D A S H B O A R D</div>
                        <div className="menuItems">
                            <div className="menuItem" onClick={() => toggleMenu("Dash")}>
                                <div className="menuHeader">
                                    <div className="menuItemContainer">
                                        <img src={dashboard} className="menuItemIcon" />
                                        <div className={`menuItemTitle  ${active === "Dash" ? "Active" : ""}`}>Dashboard</div>
                                    </div>
                                    {active === "Dash" && openMenu === "Dash" ? <IoIosArrowUp className="Updown" /> : <IoIosArrowDown className="Updown" />}
                                </div>
                                {active === "Dash" && openMenu === "Dash" &&
                                    <div className="items">
                                        <p className="itemsTitle Active">Analytics</p>
                                        <p className="itemsTitle">Finance</p>
                                        <p className="itemsTitle">Job Board</p>
                                    </div>
                                }
                            </div>

                            <div className={`menuItem ${active === "Messages" ? "Active" : ""}`} onClick={() => toggleMenu("Messages")}>
                                <div className="menuHeader">
                                    <div className="menuItemContainer">
                                        <img src={envelope} className="menuItemIcon" />
                                        <div className="menuItemTitle">Messages</div>
                                    </div>
                                    {active === "Messages" && openMenu === "Messages" ? <IoIosArrowUp className="Updown" /> : <IoIosArrowDown className="Updown" />}
                                </div>
                            </div>

                            <div className={`menuItem ${active === "Friends" ? "Active" : ""}`} onClick={() => toggleMenu("Friends")}>
                                <div className="menuHeader">
                                    <div className="menuItemContainer">
                                        <img src={friends} className="menuItemIcon" />
                                        <div className="menuItemTitle">Friends</div>
                                    </div>
                                    {active === "Friends" && openMenu === "Friends" ? <IoIosArrowUp className="Updown" /> : <IoIosArrowDown className="Updown" />}
                                </div>
                            </div>

                            <div className={`menuItem ${active === "Apps" ? "Active" : ""}`} onClick={() => toggleMenu("Apps")}>
                                <div className="menuHeader">
                                    <div className="menuItemContainer">
                                        <img src={apps} className="menuItemIcon" />
                                        <div className="menuItemTitle">Apps</div>
                                    </div>
                                    {active === "Apps" && openMenu === "Apps" ? <IoIosArrowUp className="Updown" /> : <IoIosArrowDown className="Updown" />}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='menuSection'>
                        <div className="menuTitle">P A G E S</div>
                        <div className="menuItems">
                            <div className={`menuItem ${active === "Help" ? "Active" : ""}`} onClick={() => toggleMenu("Help")}>
                                <div className="menuHeader">
                                    <div className="menuItemContainer">
                                        <img src={help} className="menuItemIcon" />
                                        <div className="menuItemTitle">Help Center</div>
                                    </div>
                                    {active === "Help" && openMenu === "Help" ? <IoIosArrowUp className="Updown" /> : <IoIosArrowDown className="Updown" />}
                                </div>
                            </div>
                            <div className={`menuItem ${active === "FileManager" ? "Active" : ""}`} onClick={() => toggleMenu("FileManager")}>
                                <div className="menuHeader">
                                    <div className="menuItemContainer">
                                        <img src={file} className="menuItemIcon" />
                                        <div className="menuItemTitle">File Manager</div>
                                    </div>
                                    {active === "FileManager" && openMenu === "FileManager" ? <IoIosArrowUp className="Updown" /> : <IoIosArrowDown className="Updown" />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="sidebarFooter">
          <img src={settings} class="footerIcon" />
          <img src={logout} class="footerIcon"/>
          <img src={globe} class="footerIcon"/>
        </div>
        </div>
    );
}

export default Sidebar;
