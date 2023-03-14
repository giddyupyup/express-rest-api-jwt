import { Note } from '../../types/note';
import { getNotes } from './getNotes';

export const findNotes = (predicate: (note: Note) => boolean) =>
  getNotes().filter(predicate);
