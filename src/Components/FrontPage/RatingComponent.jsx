import React from 'react';
import PropTypes from 'prop-types';

// Rating component
const Rating = ({ rating }) => {

  // Create an array with 5 elements, where each element is true if its index is less than the rating
  const stars = Array.from({ length: 5 }, (v, i) => i < rating);

  return (
    <div className="flex items-center justify-center">
      {stars.map((filled, index) => (
        <span key={index} className={`lg:text-2xl mx-1 ${filled ? 'text-yellow-500' : 'text-gray-300'}`}>&#9733;</span>
      ))}
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default Rating;
