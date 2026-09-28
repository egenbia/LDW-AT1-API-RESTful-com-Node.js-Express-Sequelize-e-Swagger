import { Router } from 'express';
import { getAll, getById, create, update, remove } from '../controllers/funkopop.controller';

const router = Router();

router.get('/recursos', getAll);
router.get('/recursos/:id', getById);
router.post('/recursos', create);
router.put('/recursos/:id', update);
router.delete('/recursos/:id', remove);

export default router;