import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import UserDetails from '../components/UserDetails';

const Profile = () => {
  return (
    <div className="">
      <div>
        <div>
          <Navbar />
        </div>
        <div>
          <UserDetails />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Profile;
