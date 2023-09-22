import { Router } from 'express';
import { getAll, get } from './entidadEducativa.controler.js';
export const entidadEducativaRouter = Router();
entidadEducativaRouter.get('/', getAll);
entidadEducativaRouter.get('/:id', get);
//# sourceMappingURL=entidadEducativa.routes.js.map