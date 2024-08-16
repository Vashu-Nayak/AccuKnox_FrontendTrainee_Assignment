import React from 'react';
import { useDispatch } from 'react-redux';
import { removeWidget } from './redux/dashboardSlicer';
import { CiSquareRemove } from "react-icons/ci";

const Widget = ({ widget, categoryId }) => {
  const dispatch = useDispatch();

  const handleRemove = () => {
    dispatch(removeWidget({ categoryId, widgetId: widget.id }));
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md relative">
      <h3 className="text-lg font-medium text-gray-800">{widget.name}</h3>
      <p className="text-gray-600 mt-2">{widget.text}</p>
      <button className="absolute top-2 right-2 text-red-500 " onClick={handleRemove}><CiSquareRemove /></button>
    </div>
  );
};

export default Widget;
