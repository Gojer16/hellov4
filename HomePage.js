import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to Little Lemon Restaurant</h1>
      <p>Reserve a table now!</p>
      <Link to="/booking">
        <button>Book Now</button>
      </Link>
    </div>
  );
};

export default HomePage;
