import { Router } from 'express'
import { getAll, get } from './facultad.controler.js'
import { middleware } from '../../middlewares/auth.token.middleware.js'

export const facultadRouter = Router()

facultadRouter.get('/', middleware, getAll)
facultadRouter.get('/:id', middleware, get)
