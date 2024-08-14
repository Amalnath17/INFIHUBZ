import React from 'react'
import './Sidebar.css'
import { NavLink } from 'react-router-dom'
import { GrAddCircle } from "react-icons/gr";
import { FaClipboardList } from "react-icons/fa";
import { MdOutlineBorderColor } from "react-icons/md";
import { MdOutlineDashboardCustomize } from "react-icons/md";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebar-options">
            <NavLink to='/admin-dashboard/stats' className="sidebar-option">
            <MdOutlineDashboardCustomize />
                <p>DashBoard</p>
            </NavLink>
            <NavLink to='/admin-dashboard/add' className="sidebar-option">
              <GrAddCircle />
                <p>Add Items</p>
            </NavLink>
            <NavLink to='/admin-dashboard/list' className="sidebar-option">
              <FaClipboardList />
                <p>List Items</p>
                </NavLink>
            <NavLink to='/admin-dashboard/orders' className="sidebar-option">
                <MdOutlineBorderColor />
                <p>Orders</p>
                </NavLink>
        </div>
    </div>
  )
}

export default Sidebar