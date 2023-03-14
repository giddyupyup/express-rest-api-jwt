import { Router } from 'express';

const notesRoute = Router();

notesRoute.get('/', getAllNotes);
notesRoute.get('/:id', getNote);
notesRoute.post('/', addNote);
notesRoute.put('/:id', updateNote);
notesRoute.delete('/:id', deleteNote);

export default notesRoute;
