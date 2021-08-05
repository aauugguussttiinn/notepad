import React from 'react';
import Showdown from 'showdown';

const NoteDisplay = ({title, note}) => {
  
  const converter = new Showdown.Converter();
  const convertedTitle = converter.makeHtml(title)
  const convertedContent = converter.makeHtml(note)

  function createMarkup(data) {
    return {__html: data};
  }

  return (
    <>
      <div>Your title :</div>
      <div dangerouslySetInnerHTML={createMarkup(convertedTitle)} />
      <div>Your note :</div>
      <div dangerouslySetInnerHTML={createMarkup(convertedContent)} />
    </>
  );
};

export default NoteDisplay;