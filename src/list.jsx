import React from 'react';

const List = (props) => {
  
 return (
  <div className="bg-white shadow-lg rounded-lg p-6">
    <h2 className="text-2xl font-semibold text-blue-600 mb-6">Movies List</h2>
    <ul className="space-y-4">
      {props.heredata.map((item, index) => (
        <li
          key={index}
          className="p-4 bg-gray-50 rounded-md shadow-md border border-gray-200"
        >
          <h3 className="text-xl font-bold text-blue-600">{item.title}</h3>
          <p className="text-gray-600">
            <strong>Director:</strong> {item.director}
          </p>
          <p className="text-gray-600">
            <strong>Release Date:</strong> {item.date}
          </p>
        </li>
      ))}
    </ul>
  </div>
);

};

export default List;
