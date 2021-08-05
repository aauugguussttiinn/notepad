import React from 'react';
import { useState } from 'react';
import NoteDisplay from 'components/NoteDisplay';
import "./index.css";

const MarkdownInput = () => {
  const [note, setNote] = useState(localStorage.getItem(`data`) || {title: "", content: ""});

  const onTitleChange = (event) => {
    setNote({title: event.target.value, content: note.content});
  };
  const onContentChange = (event) => {
    setNote({title: note.title, content: event.target.value});
  };

  React.useEffect(() => {
    const localStorageLength = localStorage.length;
    console.log(localStorageLength)
    console.log('1234')
    if (localStorageLength > 0) {
      const storageContent = localStorage.getItem(localStorage.key(0));
      const convertedNote = JSON.parse(storageContent);
      setNote(convertedNote);
    }
  }, []);

  React.useEffect(
    () => {
      const data = { title: note.title, content: note.content }
      localStorage.setItem('data', JSON.stringify(data));
    },
    [note]
  );

    const handleSave = () => {
      console.log('test')
    };
  

  return (
    <>
    <section className="column-full-height py-3">
      <div className="half-height px-5">
        <NoteDisplay title={note.title} content={note.content} />
      </div>
      <div className="half-height px-5">
        <input value={note.title} onChange={onTitleChange} placeholder="Your title" className="bckg-color p-3" />
        <textarea value={note.content} onChange={onContentChange} placeholder="Your note" className="bckg-color p-3" />
        <button onClick={handleSave} className="px-5 py-2"> Save </button>
      </div>
    </section>

    </>
  );
};

export default MarkdownInput;