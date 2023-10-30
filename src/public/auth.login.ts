import { Request, Response } from 'express'
import { UsuarioRepository } from '../entities/usuario/usuario.repository.js'
import { createToken } from '../utils/token.js'
import { InscripcionRepository } from '../entities/inscripcion/inscripciones.repository.js'

const usuario_repository = new UsuarioRepository()
const inscripcion_repository = new InscripcionRepository()

function adminLogin(req: Request, res: Response): any {

  const username : string = req.body.username;
  const password : string = req.body.password;

  if (username == undefined || password == undefined) {
    res.status(500).send({ status: 'error', message: 'No se enviaron parametros.' })
  }

  usuario_repository.getByUsername({ userName: username, password: password })
    .then((user) => {
      if (user) {
        res.status(200).json({ status: 'success', message: 'Se ha iniciado sesión correctamente!', user: { ...user, token: createToken(username) } });
      } else {
        res.status(401).json({ status: 'error', message: 'Las credenciales ingresadas son invalidas.' });
      }

    })
    .catch((error) => res.status(500).send(error.message))
}


function inscriptionLogin(req: Request, res: Response): any {

  const dni : string = req.body.dni;
  const access_token : string = req.body.token;

  if (dni == undefined || access_token == undefined) {
    res.status(500).send({ status: 'error', message: 'No se enviaron parametros.' })
  }

  inscripcion_repository.getByDNI({ dni: dni, access_token: access_token })
    .then((inscripcion) => {
      if (inscripcion) {
        res.status(200).json({ status: 'success', message: 'Se ha iniciado sesión correctamente!', inscripcion: { ...inscripcion, token: createToken(dni) } });
      } else {
        res.status(401).json({ status: 'error', message: 'Las credenciales ingresadas son invalidas.' });
      }

    })
    .catch((error) => res.status(500).send(error.message))
  
}

export { adminLogin, inscriptionLogin }