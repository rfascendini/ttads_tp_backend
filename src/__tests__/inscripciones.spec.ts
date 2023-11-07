import supertest from "supertest"
import { app } from '../app.ts'

describe('Testing Inscripcion Controller', () => {

  describe('getAll Inscripciones Route', () => {

    it('responds with JSON data.', async () => {

      const response = await supertest(app).get('/api/inscripciones')
      expect(response.status).toBe(200);
      expect(response.type).toBe('application/json');

    })
  })

})

