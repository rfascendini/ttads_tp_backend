import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import "reflect-metadata"
import { carreraRouter } from './entities/carrera/carrera.routes.ts'
import { entidadEducativaRouter } from './entities/entidadesEducativa/entidadEducativa.routes.ts'
import { usuarioRouter } from './entities/usuario/usuario.routes.ts'
import { facultadRouter } from './entities/facultad/facultad.routes.ts'
import { materiaRouter } from './entities/materia/materia.routes.ts'
import { inscripcionRouter } from './entities/inscripcion/inscripciones.routes.ts'
import { inscriptionLogin, adminLogin } from './public/auth.login.ts'
import { authToken } from './public/auth.token.ts'
import { configuracionParametroRouter } from './entities/configuracionParametros/configuracionParametros.routes.ts'


const app = express()
app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/admin/login', adminLogin)
app.post('/api/token/verifyAuth', authToken)
app.post('/api/inscripcion/login', inscriptionLogin)
app.use('/api/carreras', carreraRouter)
app.use('/api/entidadesEducativas', entidadEducativaRouter)
app.use('/api/usuarios', usuarioRouter)
app.use('/api/facultades', facultadRouter)
app.use('/api/materias', materiaRouter)
app.use('/api/inscripciones', inscripcionRouter)
app.use('/api/configuracionesParametros', configuracionParametroRouter)


app.use((_, res) => {
  return res.status(404).send({ message: 'Resource not found' })
})

app.listen(3000, () => {
  console.log('Server runnning on http://localhost:3000/')
})


export { app }