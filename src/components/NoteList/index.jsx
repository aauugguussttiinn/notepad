import React from 'react';
import SingleNote from 'components/SingleNote';
import "./index.css";

const NoteList = () => {
  
  const storageDisplay = (defaultValue, key) => {
    const storedData = localStorage.getItem(key);
    return storedData !== null ? [JSON.parse(storedData)] : defaultValue;
  };

  const allNotes = storageDisplay([], 'data');

  
  return (
    <div>
      <div className="d-flex mx-3 my-3">
        <button className="px-5 py-3 w-100">Add a note</button>
      </div>
      <div>
        {
          allNotes.map(({ title, content }) => <SingleNote title={title} content={content} key={title} /> )
        }
      </div>
    </div>

  )
}

export default NoteList;