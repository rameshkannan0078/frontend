
import Layout from '@/components/sidebar/sidebar';
import DashboardModal from '@/modals/dashboard/dashboard/dashboardModal';
import NotificationModal from '@/modals/dashboard/notification/notificationModal';
import React from 'react';


const Notification = () => {
  return (
    <Layout>
      <NotificationModal></NotificationModal>
      </Layout>
  );
};

export default Notification;
