import { Request, Response } from 'express'
import { InscripcionRepository } from './inscripciones.repository.js'
import { Inscripcion } from './inscripciones.entity.js'
import { generateRandomToken } from '../../utils/token.js'

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

function add(req: Request, res: Response) {

  const inscripcion = new Inscripcion()
  inscripcion.alumnonumerodocumento = req.body.dni
  inscripcion.nroTramiteDni = req.body.nroTramiteDni
  inscripcion.contactoemail = req.body.email
  inscripcion.access_token = generateRandomToken(30)

  repository.add(inscripcion)
    .then((inscripcion) => {
      if (inscripcion != null) {
        res.status(200).json({ status: 'success', message: '¡Su inscripción se ha registrado correctamente! Para continuar con el formulario se ha enviado un instructivo al correo electrónico ingresado.', inscripcion: inscripcion });
      } else {
        res.status(420).json({ status: 'error', message: 'Ya existe un usuario con esos datos.' });
      }

    })
    .catch((error) => res.status(500).send(error.message))

}

function update(req: Request, res: Response) {

  const inscripcion: Inscripcion = req.body

  repository.update(inscripcion)
    .then((inscripcion) => {
      if (inscripcion != null) {
        res.status(200).json({ status: 'success', message: '¡La inscripción se ha actualizado correctamente!', inscripcion: inscripcion });
      } else {
        res.status(420).json({ status: 'error', message: 'ERROR. No se pudo actualizar los datos de la inscripción.'});
      }

    })
    .catch((error) => res.status(500).send(error.message))


}

function remove(req: Request, res: Response) {

}

export { getAll, get, getByDNI, add, update, remove }

