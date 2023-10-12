import { Router } from 'express'
import { getAll, get } from './carrera.controler.js'

export const carreraRouter = Router()

carreraRouter.get('/', getAll)
carreraRouter.get('/:id', get)
