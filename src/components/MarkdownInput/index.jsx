import React from 'react';
import { useState } from 'react';

const MarkdownInput = () => {
  const [note, setNote] = useState('');
  const [title, setTitle] = useState('');

  const onChange = (event) => {
    setTitle(event.target.value);
    setNote(event.target.value);
  };

  return (
    <>
      <div>Title: {title}</div>
      <input value={title} onChange={onChange} />
      <div>Your note: {note}</div>
      <textarea value={note} onChange={onChange} />
    </>
  );
};

export default MarkdownInput;