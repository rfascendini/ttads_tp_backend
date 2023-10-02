import "reflect-metadata"
import { DataSource } from 'typeorm'
import { Carrera } from '../carrera/carrera.entity.js'
import { EntidadEducativa } from '../entidadesEducativa/entidadEducativa.entity.js'
import { Usuario } from '../usuario/usuario.entity.js'
import { Facultad } from "../facultad/facultad.entity.js"
import { Materia } from "../materia/materia.entity.js"

export const AppDataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "",
  database: "ttads_sistemainscripcion",
<<<<<<< HEAD
  entities: [Carrera, EntidadEducativa, Usuario, Facultad, Materia],
=======
  entities: [Carrera],
>>>>>>> db91eb72b4d96ebb56da4ddb8d9bdfff7f7ca7fa
})

AppDataSource.initialize()
  .then(() => {
    console.log("Conexion a DB exitosa!");

  })
  .catch((error) => console.log(error))