import { Request, Response, NextFunction } from 'express'
import { CarreraRepository } from './carrera.repository.js'
import { Carrera } from './carrera.entity.js'

const repository = new CarreraRepository()

function findAll(req: Request, res: Response) {
  res.json({ data: repository.findAll() })
}

function findOne(req: Request, res: Response) {
  const id = req.params.id
  const carrera = repository.findOne({ id })
  if (!carrera) {
    return res.status(404).send({ message: 'Carrera not found' })
  }
  res.json({ data: carrera })
}

export { findAll, findOne }