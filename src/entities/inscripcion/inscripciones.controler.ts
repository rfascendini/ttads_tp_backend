import { Request, Response } from 'express'
import { InscripcionRepository } from './inscripciones.repository.js'

const repository = new InscripcionRepository()

function getAll(req: Request, res: Response) {
  repository.getAll().then((data) => res.json(data))
}

function get(req: Request, res: Response) {
  const id = req.params.id
  repository.get({ id }).then((data) => res.json(data))
}

function getByDNI(req: Request, res: Response) {
  const dni = req.params.dni
  const access_token = req.params.access_token
  repository.getByDNI({ dni, access_token }).then((data) => res.json(data))
}

export { getAll, get, getByDNI}