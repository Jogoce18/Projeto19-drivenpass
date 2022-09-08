import { Router } from 'express';

import { create,getAll,getById,deleteNote} from '../controllers/notesController';
import { validateJWT } from '../middlewares/validateJWT';
import { notesSchema } from '../schemas/notesSchema';
import { validateSchema } from '../middlewares/validateSchema';

const notesRouter = Router();

notesRouter.post('/note',validateSchema(notesSchema),validateJWT,create);

notesRouter.get('/notes',validateJWT,getAll);

notesRouter.get('/notes/:id',validateJWT,getById);

notesRouter.delete('/notes/:id',validateJWT,deleteNote);

export default notesRouter;