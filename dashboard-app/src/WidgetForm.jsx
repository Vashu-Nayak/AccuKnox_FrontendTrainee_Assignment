import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addWidget } from './redux/dashboardSlicer';

const AddWidgetForm = ({ categoryId }) => {
  const [name, setName] = useState('');
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newWidget = {
      id: Date.now(),
      name,
      text
    };
    dispatch(addWidget({ categoryId, widget: newWidget }));
    setName('');
    setText('');
  };

  return (
    <form  className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <input className="p-2 border border-gray-300 rounded-lg" type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Widget Name" required />
      <input className="p-2 border border-gray-300 rounded-lg" type="text" value={text} onChange={(e) => setText(e.target.value)} placeholder="Widget Text" required />
      <button className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition" type="submit">Add Widget</button>
    </form>
  );
};

export default AddWidgetForm;
