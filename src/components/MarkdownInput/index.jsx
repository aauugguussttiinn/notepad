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
    <section className="column-full-height py-3">
      <div className="half-height px-5">
        <NoteDisplay title={title} note={note} />
      </div>
      <div className="half-height px-5">
        <input value={title} onChange={onTitleChange} placeholder="Your title" className="bckg-color p-3" />
        <textarea value={note} onChange={onNoteChange} placeholder="Your note" className="bckg-color p-3" />
        <button onClick={handleSave} className="px-5 py-2"> Save </button>
      </div>
    </section>

    </>
  );
};

export default MarkdownInput;