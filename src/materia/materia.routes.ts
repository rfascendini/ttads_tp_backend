import { Router } from 'express'
import { getAll, get } from './materia.controler.js'

export const materiaRouter = Router()

materiaRouter.get('/', getAll)
materiaRouter.get('/:id', get)
