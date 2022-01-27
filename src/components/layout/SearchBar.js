import React from 'react';
import './styles/Layout.css';
// import { ReactComponents as SearchIcon } from './search-icon.svg';

function SearchBar() {
  const handleChange = (event) => {
    event.preventDefault();
  };

  return (
    <div className="search-bar-container">
      <input type="text" className="search-input-bar" onChange={handleChange} placeholder="Search ..." />
    </div>
  );
}

export default SearchBar;
