import { Router } from 'express'
import { getAll, get } from './usuario.controler.js'
import { middleware } from '../../middlewares/auth.token.middleware.js'

export const usuarioRouter = Router()

usuarioRouter.get('/', middleware, getAll)
usuarioRouter.get('/:id', get)