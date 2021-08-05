import React from 'react';
import Showdown from 'showdown';
import "./index.css";

const NoteDisplay = ({title, note}) => {
  
  const converter = new Showdown.Converter();
  const convertedTitle = converter.makeHtml(title)
  const convertedContent = converter.makeHtml(note)

  function createMarkup(data) {
    return {__html: data};
  }

  return (
    <>
      <h1 className="text-red" dangerouslySetInnerHTML={createMarkup(convertedTitle)} />
      <div className="text-white" dangerouslySetInnerHTML={createMarkup(convertedContent)} />
    </>
  );
};

export default NoteDisplay;