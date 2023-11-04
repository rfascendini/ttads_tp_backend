import "reflect-metadata"
import { DataSource } from 'typeorm'
import { Carrera } from '../entities/carrera/carrera.entity.js'
import { EntidadEducativa } from '../entities/entidadesEducativa/entidadEducativa.entity.js'
import { Usuario } from '../entities/usuario/usuario.entity.js'
import { Facultad } from "../entities/facultad/facultad.entity.js"
import { Materia } from "../entities/materia/materia.entity.js"
import { Inscripcion } from "../entities/inscripcion/inscripciones.entity.js"
import { ConfiguracionParametro } from "../entities/configuracionParametros/configuracionParametros.entity.js"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "ttads_sistemainscripcion",
  entities: [Carrera, EntidadEducativa, Usuario, Facultad, Materia, Inscripcion, ConfiguracionParametro],
})

AppDataSource.initialize()
  .then(() => {
    console.log("Conexion a DB exitosa!");

  })
  .catch((error) => console.log(error))