import { Request, Response } from 'express'
import { UsuarioRepository } from './usuario.repository.js'

const repository = new UsuarioRepository()

function getAll(req: Request, res: Response) {
  repository.getAll().then((data) => res.json(data))
}

function get(req: Request, res: Response) {
  const id = req.params.id
  repository.get({ id }).then((data) => res.json(data))
}

function getByUsername(req: Request, res: Response) {
  const userName = req.params.userName
  const password = req.params.password
  repository.getByUsername({ userName, password }).then((data) => res.json(data))
}

export { getAll, get, getByUsername }


