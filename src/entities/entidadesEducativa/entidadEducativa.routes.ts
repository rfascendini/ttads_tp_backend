import { Router } from 'express'
import { getAll, get } from './entidadEducativa.controler.js'
import { middleware } from '../../middlewares/auth.token.middleware.js'

export const entidadEducativaRouter = Router()

entidadEducativaRouter.get('/', middleware, getAll)
entidadEducativaRouter.get('/:id', middleware, get)
