import { writeFile } from 'fs/promises';
import { join } from 'path';
import { Note } from '../../types/note';

export const saveNotes = (notes: Note[]) => {
  writeFile(join(__dirname, './notes.json'), JSON.stringify(notes, null, 2));
};
