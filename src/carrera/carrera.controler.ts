import { Request, Response } from 'express'
import { CarreraRepository } from './carrera.repository.js'
import { Carrera } from './carrera.entity.js'

const repository = new CarreraRepository()

function getAll(req: Request, res: Response) {
  repository.getAll().then((data) => res.json(data))
}

function get(req: Request, res: Response) {
  const id = req.params.id
  repository.get({ id }).then((data) => res.json(data))
}

export { getAll, get }