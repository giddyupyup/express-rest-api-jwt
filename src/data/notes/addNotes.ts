import { Note } from '../../types/note';
import { getNotes } from './getNotes';
import { saveNotes } from './saveNotes';

export const addNotes = (note: Note) => {
  const notes = getNotes().concat(note);

  saveNotes(notes);

  return note;
};
