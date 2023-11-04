import { Router } from 'express'
import { getAll } from './configuracionParametros.controler.js'
import { middleware } from '../../middlewares/auth.token.middleware.js'

export const configuracionParametroRouter = Router()

configuracionParametroRouter.get('/', getAll)
