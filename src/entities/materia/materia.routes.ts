import { Router } from 'express'
import { getAll, get } from './materia.controler.js'
import { middleware } from '../../middlewares/auth.token.middleware.js'

export const materiaRouter = Router()

materiaRouter.get('/', middleware, getAll)
materiaRouter.get('/:id', middleware, get)
