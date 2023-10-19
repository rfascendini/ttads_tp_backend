import { Request, Response } from 'express'
import { UsuarioRepository } from '../entities/usuario/usuario.repository.js'
import { createToken } from '../utils/token.js'

const repository = new UsuarioRepository()

function login(req: Request, res: Response): any {

  const { username, password } = req.body;

  if (!username && !password) {
    res.status(500).send({ status: 'error', message: 'No se enviaron parametros.' })
  }

  repository.getByUsername({ userName: username, password: password })
    .then((user) => {
      if (user) {
        res.status(200).json({ status: 'success', message: 'Se ha iniciado sesión correctamente!', user: { ...user, token: createToken(username) } });
      } else {
        res.status(200).json({ status: 'error', message: 'Las credenciales ingresadas son invalidas.' });
      }

    })
    .catch((error) => res.status(500).send(error.message))
}


function logout(req: Request, res: Response): any {

  res.status(200).json({ status: 'success', message: '¡La sesión ha finalizado!' });

}



export { login, logout }