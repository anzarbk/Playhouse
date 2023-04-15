import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from '../pages/admin/login';
import Dashboard from '../pages/admin/Dashboard';
import Theatre from '../pages/admin/Theatre';
import User from '../pages/admin/User';

const adminRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/user" element={<User />} />
      <Route path="/theatre" element={<Theatre />} />
    </Routes>
  );
};

export default adminRoutes;
