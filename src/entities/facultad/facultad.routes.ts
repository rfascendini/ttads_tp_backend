import { Router } from 'express'
import { getAll, get } from './facultad.controler.js'

export const facultadRouter = Router()

facultadRouter.get('/', getAll)
facultadRouter.get('/:id', get)
