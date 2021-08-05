import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import NoteDisplay from 'components/NoteDisplay';
import MarkdownInput from 'components/MarkdownInput';

const App = () => (
  <main>
    <div>Welcome to your NotePad</div>
    <div>
      <NoteDisplay />
      <MarkdownInput />
    </div>
  </main>
);

ReactDOM.render(<App />, document.getElementById('root'));

