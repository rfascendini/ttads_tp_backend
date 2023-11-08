import "reflect-metadata"
import supertest from "supertest"
import { app } from '../app.js'

describe('Testing Inscripcion Controller', () => {

  describe('getAll Inscripciones Router', () => {

    test('responds with JSON data.', async () => {

      await supertest(app).get('/api/inscripciones/737')
      .expect(200);


    }, 5000)
  })

})

