import { Router } from 'express'
import { getAll, get, add, update, remove } from './inscripciones.controler.js'
import { middleware } from '../../middlewares/auth.token.middleware.js'

export const inscripcionRouter = Router()

inscripcionRouter.get('/', middleware, getAll)
inscripcionRouter.get('/:id', middleware, get)
inscripcionRouter.post('/', add)
inscripcionRouter.put('/:id', middleware, update)
inscripcionRouter.patch('/:id', middleware, update)
inscripcionRouter.delete('/:id', middleware, remove)

