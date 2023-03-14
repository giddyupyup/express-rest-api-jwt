import { Note } from '../../types/note';
import { getNotes } from './getNotes';

export const findOneNote = (predicate: (note: Note) => boolean) =>
  getNotes().find(predicate);
