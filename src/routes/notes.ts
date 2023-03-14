import { Router } from 'express';
import { getAllNotes } from '../controllers/notes/getAllNotes';
import { jwtVerify } from '../middleware/users/jwtVerify';

const notesRoute = Router();

notesRoute.use(jwtVerify);

notesRoute.get('/', getAllNotes);
notesRoute.get('/:id', getNote);
notesRoute.post('/', addNote);
notesRoute.put('/:id', updateNote);
notesRoute.delete('/:id', deleteNote);

export default notesRoute;
