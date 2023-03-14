import express, { json, urlencoded } from 'express';
import { routeNotFound } from './controllers/notFound/routeNotFound';
import authRoute from './routes/auth';
import notesRoute from './routes/notes';

const app = express();

app.use(urlencoded({ extended: false }));
app.use(json());

app.use('/auth', authRoute);
app.use('/notes', notesRoute);

app.all('*', routeNotFound);

export default app;
