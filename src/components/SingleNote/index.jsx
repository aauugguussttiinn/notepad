import React from 'react';
import "./index.css";


const SingleNote = ({ title, content }) => (
  <div className="border p-3 m-3">
    <h1 className="text-red">{title}</h1>
    <p className="text-white">{content}</p>
  </div>
);

export default SingleNote;