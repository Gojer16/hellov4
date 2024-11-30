import React, { useState } from 'react';
import BookingForm from './BookingForm';

const BookingPage = ({ bookings, setBookings }) => {
  return (
    <div>
      <h1>Book a Table</h1>
      <BookingForm bookings={bookings} setBookings={setBookings} />
    </div>
  );
};

export default BookingPage;
