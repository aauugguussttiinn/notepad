import React from 'react';
import { useState } from 'react';
import NoteDisplay from 'components/NoteDisplay';

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
      <NoteDisplay data={title, note} />
      <div>Title: {title}</div>
      <input value={title} onChange={onTitleChange} />
      <div>Your note: {note}</div>
      <textarea value={note} onChange={onNoteChange} />
    </>
  );
};

export default MarkdownInput;