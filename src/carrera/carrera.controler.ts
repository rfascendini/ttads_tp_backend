import { Request, Response, NextFunction } from 'express'
import { CarreraRepository } from './carrera.repository.js'

const repository = new CarreraRepository()

function getAll(req: Request, res: Response) {

  repository.getAll().then((data) => res.json(data))
  
}

function get(req: Request, res: Response) {
  const id = req.params.id
  const carrera = repository.get({ id })
  if (!carrera) {
    return res.status(404).send({ message: 'Carrera not found' })
  }
  res.json(carrera)
}

export { getAll, get }