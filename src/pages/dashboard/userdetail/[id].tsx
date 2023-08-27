// pages/dashboard.js

import UserDetail from '@/modals/dashboard/user/userDetail';
import React from 'react';
import  Layout from '@/components/sidebar/sidebar';


const User = () => {
  return (
    <Layout>
        <UserDetail/>
      </Layout>
  );
};

export default User;
