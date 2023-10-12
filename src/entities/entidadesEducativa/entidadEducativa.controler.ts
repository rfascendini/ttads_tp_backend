import { Request, Response } from 'express'
import { EntidadEducativaRepository } from './entidadEducativa.repository.js'

const repository = new EntidadEducativaRepository()

function getAll(req: Request, res: Response) {
  repository.getAll().then((data) => res.json(data))
}

function get(req: Request, res: Response) {
  const id = req.params.id
  repository.get({ id }).then((data) => res.json(data))
}

export { getAll, get }