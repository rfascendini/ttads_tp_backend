import { Router } from 'express'
import { getAll, get } from './carrera.controler.ts'
import { middleware } from '../../middlewares/auth.token.middleware.ts'

export const carreraRouter = Router()

carreraRouter.get('/', middleware, getAll)
carreraRouter.get('/:id', middleware, get)
