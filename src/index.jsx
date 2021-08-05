import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./main.css";
import NoteList from 'components/NoteList';
import MarkdownInput from 'components/MarkdownInput';


const App = () => (
  <main className="d-flex">
    <div className="col-4 border column-full-height">
      <NoteList />
    </div>
    <div className="col-8 column-full-height">
      <MarkdownInput />
    </div>
  </main>
);

ReactDOM.render(<App />, document.getElementById('root'));

