import React from "react";
import AdminNavbar from "../../components/admin/AdminNavbar";
import Sidebar from "../../components/admin/Sidebar";
import { Route, Routes } from "react-router-dom";
import Add from "../../components/admin/Add/Add";
import List from "../../components/admin/List/List";
import Orders from "../../components/admin/Orders/Orders";
import Profile from "../../components/admin/Profile/Profile";
import Stats from "../../components/admin/Stats/Stats";

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <div className="admin-side-content">
        <Sidebar />
        <div className="admin-content">
          <Routes>
            <Route path="profile" element={<Profile />} />
            <Route path="add" element={<Add />} />
            <Route path="stats" element={<Stats />} />
            <Route path="list" element={<List />} />
            <Route path="orders" element={<Orders />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
