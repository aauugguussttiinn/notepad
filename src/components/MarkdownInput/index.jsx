import React from 'react';
import { useState } from 'react';
import NoteDisplay from 'components/NoteDisplay';
import "./index.css";

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
    <section className="column-full-height">
      <div className="half-height">
        <NoteDisplay title={title} note={note} />
      </div>
      <div className="half-height px-3">
        <input value={title} onChange={onTitleChange} placeholder="Your title" className="bckg-color p-3" />
        <textarea value={note} onChange={onNoteChange} placeholder="Your note" className="bckg-color p-3" />
        <button onClick={handleSave}> Save </button>
      </div>
    </section>

    </>
  );
};

export default MarkdownInput;