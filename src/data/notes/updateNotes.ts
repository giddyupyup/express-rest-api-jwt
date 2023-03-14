import { getNotes } from './getNotes';
import { saveNotes } from './saveNotes';

export const updateNotes = ({
  userId,
  noteId,
  title,
  content,
}: {
  userId: string;
  noteId: string;
  title: string;
  content: any;
}) => {
  const notes = getNotes();

  const noteIndex = notes.findIndex(
    (note) => userId === note.userId && noteId === note.id
  );

  const updatedNote = {
    ...notes[noteIndex],
    title,
    content,
  };

  notes.splice(noteIndex, 1, updatedNote);

  saveNotes(notes);

  return updatedNote;
};
