import React from 'react';


const NoteDisplay = ({title, note}) => {
  return (
    <>
      <div>{note}</div>
      <div>{title}</div>
    </>
  );
};

export default NoteDisplay;