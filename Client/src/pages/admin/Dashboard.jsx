import React from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../../components/Admin-UI/Sidebar';

function Dashboard() {
  const navigate = useNavigate();
  return <Sidebar />;
}

export default Dashboard;
