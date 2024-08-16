import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from './redux/dashboardSlicer';

const SearchBar = () => {
  const dispatch = useDispatch();

  const handleSearch = (e) => {
    dispatch(setSearchQuery(e.target.value));
  };

  return (
    <input
      type="text"
      placeholder="Search Widgets"
      onChange={handleSearch}
      className="p-2 mb-4 border border-gray-300 rounded-lg w-50"
    />
  );
};

export default SearchBar;
