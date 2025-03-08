import React from 'react';
import './Options.css'; // Import Options CSS

const Options = ({ onSearch, sortOptions, onSortChange }) => {
  return (
    <div className="options-tile">
      <h1>YoloFeed</h1>
      <input
        type="text"
        placeholder="Search posts..."
        onChange={(e) => onSearch(e.target.value)}
      />
      <select onChange={(e) => onSortChange(e.target.value)}>
        {sortOptions.map(option => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Options;
