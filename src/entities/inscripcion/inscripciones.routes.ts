import { Router } from 'express'
import { getAll, get, add, update, remove } from './inscripciones.controler.js'
import { middleware } from '../../middlewares/auth.token.middleware.js'

export const inscripcionRouter = Router()

inscripcionRouter.get('/', getAll)
inscripcionRouter.get('/:id', get)
inscripcionRouter.post('/', add)
inscripcionRouter.put('/:id', update)
inscripcionRouter.patch('/:id', update)
inscripcionRouter.delete('/:id', remove)

