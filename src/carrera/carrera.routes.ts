import { Router } from 'express'
import { findAll, findOne } from './carrera.controler'

export const carreraRouter = Router()

carreraRouter.get('/', findAll)
carreraRouter.get('/:id', findOne)
