
import DashboardModal from '@/modals/dashboard/dashboard/dashboardModal';
import React from 'react';
import Layout from '@/components/sidebar/sidebar';
import BookingModal from '@/modals/dashboard/booking/bookingModal';

const Booking = () => {
  return (
    <Layout>
  <BookingModal></BookingModal>
      </Layout>
  );
};

export default Booking;
