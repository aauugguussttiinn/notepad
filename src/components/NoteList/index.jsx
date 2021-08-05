import React from 'react';

const NoteList = () => {
  
  const storageDisplay = (key) => {
    const storageValue = "localStorage.getItem(`${key}`)";
    // const storageValue = "hello";
    return (
      storageValue
    )
  }

  storageDisplay()

  // React.useEffect(
  //   () => {
  //     storageDisplay();
  //   },
  //   []
  // );
  
  return (
    <div>
      <div>Test</div>
      <div>{storageDisplay()}</div>
    </div>

  )
}

export default NoteList;