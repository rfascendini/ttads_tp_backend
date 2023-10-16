import { Request, Response } from 'express'
import { UsuarioRepository } from '../entities/usuario/usuario.repository.js'
import { createToken } from '../utils/token.js'

const repository = new UsuarioRepository()

function login(req: Request, res: Response): any {

  const { username, password } = req.body;

  if (!username && !password) {
    res.status(500).send("No se enviaron parametros.")
  }

  repository.getByUsername({ userName: username, password: password })
    .then((user) => {
      if (user) {
        res.status(200).json({ status: 'success', message: 'Login successful', user: { ...user, token: createToken(username) } });
      } else {
        res.status(401).json({ status: 'error', message: 'Invalid credentials' });
      }

    })
    .catch((error) => res.status(500).send(error.message))
}


export { login }



