import { Request, Response, NextFunction } from 'express'
import { CarreraRepository } from './carrera.repository.js'
import { Carrera } from './carrera.entity.js'

const repository = new CarreraRepository()

function getAll(req: Request, res: Response) {
  res.json({ data: repository.getAll() })
}

function get(req: Request, res: Response) {
  const id = req.params.id
  const carrera = repository.get({ id })
  if (!carrera) {
    return res.status(404).send({ message: 'Carrera not found' })
  }
  res.json({ data: carrera })
}

export { getAll, get }