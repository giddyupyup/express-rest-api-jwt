import { Router } from 'express';
import { addNote } from '../controllers/notes/addNote';
import { deleteNote } from '../controllers/notes/deleteNote';
import { getAllNotes } from '../controllers/notes/getAllNotes';
import { getNote } from '../controllers/notes/getNote';
import { updateNote } from '../controllers/notes/updateNote';
import { doesNoteExists } from '../middleware/notes/doesNoteExists';
import { verifyNote } from '../middleware/notes/verifyNote';
import { jwtVerify } from '../middleware/users/jwtVerify';

const notesRoute = Router();

notesRoute.use(jwtVerify);

notesRoute.get('/', getAllNotes);
notesRoute.get('/:id', doesNoteExists, getNote);
notesRoute.post('/', verifyNote, addNote);
notesRoute.put('/:id', doesNoteExists, verifyNote, updateNote);
notesRoute.delete('/:id', doesNoteExists, deleteNote);

export default notesRoute;
