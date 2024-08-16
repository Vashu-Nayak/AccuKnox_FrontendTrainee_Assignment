import React from 'react';
import { useSelector } from 'react-redux';
import Category from './Category';
import SearchBar from './SearchBar';
import { selectFilteredCategories } from './redux/dashboardSlicer';

const Dashboard = () => {
  const filteredCategories = useSelector(selectFilteredCategories);

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <SearchBar />
      {filteredCategories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Dashboard;
