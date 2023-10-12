import { Router } from 'express'
import { getAll, get } from './usuario.controler.js'

export const usuarioRouter = Router()

usuarioRouter.get('/', getAll)
usuarioRouter.get('/:id', get)