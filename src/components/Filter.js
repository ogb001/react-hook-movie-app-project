import React from 'react';

const Filter = ({ titleFilter, ratingFilter, setTitleFilter, setRatingFilter }) => {
  return (
    <div className="filter">
      <input 
        type="text" 
        placeholder="Search by title" 
        value={titleFilter} 
        onChange={(e) => setTitleFilter(e.target.value)} 
      />
      <input 
        type="number" 
        placeholder="Search by rating" 
        value={ratingFilter} 
        onChange={(e) => setRatingFilter(e.target.value)} 
      />
    </div>
  );
};

export default Filter;