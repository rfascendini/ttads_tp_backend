import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import "reflect-metadata"
import { carreraRouter } from './entities/carrera/carrera.routes.js'
import { entidadEducativaRouter } from './entities/entidadesEducativa/entidadEducativa.routes.js'
import { usuarioRouter } from './entities/usuario/usuario.routes.js'
import { facultadRouter } from './entities/facultad/facultad.routes.js'
import { materiaRouter } from './entities/materia/materia.routes.js'
import { inscripcionRouter } from './entities/inscripciones/inscripciones.routes.js'
import { login, logout } from './public/auth.login.js'
import { authToken } from './public/auth.token.js'



const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));


app.post('/api/admin/login', login)
app.post('/api/admin/logout', logout)
app.post('/api/admin/verifyAuth', authToken)
app.use('/api/carreras', carreraRouter)
app.use('/api/entidadesEducativas', entidadEducativaRouter)
app.use('/api/usuarios', usuarioRouter)
app.use('/api/facultades', facultadRouter)
app.use('/api/materias', materiaRouter)
app.use('/api/inscripciones', inscripcionRouter)




app.use((_, res) => {
  return res.status(404).send({ message: 'Resource not found' })
})

app.listen(3000, () => {
  console.log('Server runnning on http://localhost:3000/')
})