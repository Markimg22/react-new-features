import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import NoteApp from './components/NoteApp';

const jsx = (
  <React.StrictMode>
    <NoteApp />
  </React.StrictMode>
);

ReactDOM.render(jsx, document.getElementById('root'));

reportWebVitals();