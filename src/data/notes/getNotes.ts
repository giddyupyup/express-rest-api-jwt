import { Note } from '../../types/note';
import notes from './notes.json';

export const getNotes = () => [...notes] as Note[];
