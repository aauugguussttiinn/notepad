import React from 'react';
import SingleNote from 'components/SingleNote';

const NoteList = () => {
  
  const storageDisplay = (defaultValue, key) => {
    const storedValue = localStorage.getItem(key);
    return storedValue !== null ? [JSON.parse(storedValue)] : defaultValue;
  };

  const allNotes = storageDisplay([], 'data');

  
  return (
    <div>
      <div>Test</div>
      <div>
        {
          allNotes.map(({ title, content }) => <SingleNote title={title} content={content} key={title} /> )
        }
      </div>
    </div>

  )
}

export default NoteList;