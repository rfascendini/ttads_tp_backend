import { Router } from 'express'
import { getAll, get } from './carrera.controler.js'
import { middleware } from '../../middlewares/auth.token.middleware.js'

export const carreraRouter = Router()

carreraRouter.get('/', middleware, getAll)
carreraRouter.get('/:id', middleware, get)
