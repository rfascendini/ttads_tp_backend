import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import "reflect-metadata"
import { carreraRouter } from './entities/carrera/carrera.routes.js'
import { entidadEducativaRouter } from './entities/entidadesEducativa/entidadEducativa.routes.js'
import { usuarioRouter } from './entities/usuario/usuario.routes.js'
import { facultadRouter } from './entities/facultad/facultad.routes.js'
import { materiaRouter } from './entities/materia/materia.routes.js'
import { inscripcionRouter } from './entities/inscripcion/inscripciones.routes.js'
import { inscriptionLogin, adminLogin } from './public/auth.login.js'
import { authToken } from './public/auth.token.js'
import { middleware } from './middlewares/auth.token.middleware.js'




const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));


// SIN MIDDLEWARE
app.post('/api/admin/login', adminLogin)
app.post('/api/token/verifyAuth', authToken)
app.post('/api/inscripcion/login', inscriptionLogin)

// CON MIDDLEWARE
app.use('/api/carreras', middleware, carreraRouter)
app.use('/api/entidadesEducativas', middleware, entidadEducativaRouter)
app.use('/api/usuarios', middleware, usuarioRouter)
app.use('/api/facultades', middleware, facultadRouter)
app.use('/api/materias', middleware, materiaRouter)
app.use('/api/inscripciones', middleware, inscripcionRouter)


app.use((_, res) => {
  return res.status(404).send({ message: 'Resource not found' })
})

app.listen(3000, () => {
  console.log('Server runnning on http://localhost:3000/')
})