import express from 'express'
import cors from 'cors'
import "reflect-metadata"
import { carreraRouter } from './carrera/carrera.routes.js'
import { entidadEducativaRouter } from './entidadesEducativa/entidadEducativa.routes.js'
import { usuarioRouter } from './usuario/usuario.routes.js'
import { facultadRouter } from './facultad/facultad.routes.js'
import { materiaRouter } from './materia/materia.routes.js'

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/carreras', carreraRouter)
app.use('/api/entidadesEducativas', entidadEducativaRouter)
app.use('/api/usuarios', usuarioRouter)
app.use('/api/facultades', facultadRouter)
app.use('/api/materias', materiaRouter)

app.use((_, res) => {
  return res.status(404).send({ message: 'Resource not found' })
})

app.listen(3000, () => {
  console.log('Server runnning on http://localhost:3000/')
})