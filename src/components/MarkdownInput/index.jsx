import React from 'react';
import { useState } from 'react';

const MarkdownInput = () => {
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');

  const onTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const onNoteChange = (event) => {
    setNote(event.target.value);
  };

  return (
    <>
      <div>Title: {title}</div>
      <input value={title} onChange={onTitleChange} />
      <div>Your note: {note}</div>
      <textarea value={note} onChange={onNoteChange} />
    </>
  );
};

export default MarkdownInput;