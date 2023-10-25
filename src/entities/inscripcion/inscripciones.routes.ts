import { Router } from 'express'
import { getAll, get } from './inscripciones.controler.js'

export const inscripcionRouter = Router()

inscripcionRouter.get('/', getAll)
inscripcionRouter.get('/:id', get)
