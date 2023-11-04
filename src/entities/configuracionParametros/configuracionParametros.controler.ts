import { Request, Response } from 'express'
import { ConfiguracionParametroRepository } from './configuracionParametros.repository.js'

const repository = new ConfiguracionParametroRepository()

function getAll(req: Request, res: Response) {
  repository.getAll().then((data) => res.json(data))
}

export { getAll}