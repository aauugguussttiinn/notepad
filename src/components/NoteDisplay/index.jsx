import React from 'react';


const NoteDisplay = ({title, note}) => {
  return (
    <>
      <div>{title}</div>
      <div>{note}</div>
    </>
  );
};

export default NoteDisplay;