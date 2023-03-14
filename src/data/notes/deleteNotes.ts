import { getNotes } from './getNotes';
import { saveNotes } from './saveNotes';

export const deleteNotes = ({
  userId,
  noteId,
}: {
  userId: string;
  noteId: string;
}) => {
  const notes = getNotes();

  const noteIndex = notes.findIndex(
    (note) => userId === note.userId && noteId === note.id
  );

  notes.splice(noteIndex, 1);

  saveNotes(notes);
};
