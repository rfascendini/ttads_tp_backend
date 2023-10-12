import { Request, Response } from 'express'
import { UsuarioRepository } from '../entities/usuario/usuario.repository.js'
import { createToken } from '../utils/token.js'

const repository = new UsuarioRepository()

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


      res.status(200).json({...data, token: createToken(username)})

    })
    .catch((error) => res.status(500).send(error.message))
}



export { login }



