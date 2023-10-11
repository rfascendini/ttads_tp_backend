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

function login(req: Request, res: Response) {

  const { username, password } = req.body;

  if (!username && !password) {
    res.status(500).send("No se enviaron parametros.")
  }

  repository.getByUsername({ userName: username, password: password })
    .then((data) => {
      if (data == null) {
        throw new Error("El Usuario/Contraseña no es correcto.")
      }
      
      res.status(200).json({...data, token: 'token-secreto'})
    })
    .catch((error) => res.status(500).send(error.message))
}

export { getAll, get, login }


