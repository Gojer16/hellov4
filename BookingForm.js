import React, { useState } from 'react';

const BookingForm = ({ bookings, setBookings }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const availableTimes = ['17:00', '18:00', '19:00', '20:00', '21:00'];

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBooking = { date, time, guests, occasion };

    // Check if the time is already booked
    if (bookings.find((booking) => booking.date === date && booking.time === time)) {
      alert('This time slot is already booked!');
    } else {
      setBookings([...bookings, newBooking]);
      alert('Booking Confirmed!');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Date:</label>
      <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} required />

      <label htmlFor="time">Time:</label>
      <select id="time" value={time} onChange={(e) => setTime(e.target.value)} required>
        {availableTimes.map((t, index) => (
          <option key={index} value={t}>
            {t}
          </option>
        ))}
      </select>

      <label htmlFor="guests">Guests:</label>
      <input
        type="number"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        min="1"
        required
      />

      <label htmlFor="occasion">Occasion:</label>
      <input
        type="text"
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        required
      />

      <button type="submit">Submit Reservation</button>
    </form>
  );
};

export default BookingForm;
