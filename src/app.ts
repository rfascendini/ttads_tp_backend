import express from 'express'
import { carreraRouter } from './carrera/carrera.routes'

const app = express()
app.use(express.json())

app.use('/api/carreras', carreraRouter)

app.use((_req : any,res : any) => {
  return res.status(404).send({ message: 'Resource not found' })
})

app.listen(3000, () => {
  console.log('Server runnning on http://localhost:3000/')
})