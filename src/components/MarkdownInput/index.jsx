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

  const handleSave = () => {
    localStorage.setItem(`${title}`, `${title}`);
    localStorage.setItem(`${note}`, `${note}`);
    console.log(localStorage.getItem(`${title}`))
    console.log(localStorage.getItem(`${note}`)) 
  }

  return (
    <>
      <NoteDisplay title={title} note={note} />
      <input value={title} onChange={onTitleChange} placeholder="Your title" />
      <textarea value={note} onChange={onNoteChange} placeholder="Your note" />
      <button onClick={handleSave}> Save </button>
    </>
  );
};

export default MarkdownInput;