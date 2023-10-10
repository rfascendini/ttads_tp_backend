import "reflect-metadata"
import { DataSource } from 'typeorm'
import { Carrera } from '../carrera/carrera.entity.js'
import { EntidadEducativa } from '../entidadesEducativa/entidadEducativa.entity.js'
import { Usuario } from '../usuario/usuario.entity.js'
import { Facultad } from "../facultad/facultad.entity.js"
import { Materia } from "../materia/materia.entity.js"
import { Inscripcion } from "../inscripciones/inscripciones.entity.js"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "ttads_sistemainscripcion",
  entities: [Carrera, EntidadEducativa, Usuario, Facultad, Materia, Inscripcion],
})

AppDataSource.initialize()
  .then(() => {
    console.log("Conexion a DB exitosa!");

  })
  .catch((error) => console.log(error))