import React, { useEffect, useReducer } from 'react'
import notesReducer from '../reducers/notes';
import AddNoteForm from './AddNoteForm';
import NoteList from './NoteList';
import NotesContext from '../context/notes-context';

const NoteApp = () => {
  const [notes, notesDispatch] = useReducer(notesReducer, []);

  useEffect(() => {
    const notes = JSON.parse(localStorage.getItem('notes'));
    if (notes) {
      notesDispatch({ type: 'POPULATE_NOTES', notes });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <NotesContext.Provider value={{ notes, notesDispatch }}>
      <h1>Notes:</h1>
      <AddNoteForm />
      <NoteList />
    </NotesContext.Provider>
  );
};

export default NoteApp;