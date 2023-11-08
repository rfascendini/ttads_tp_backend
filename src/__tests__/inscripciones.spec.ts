
import { app } from '../app'
import supertest from 'supertest';

describe('Testing Inscripcion Controller', () => {

  test('function GET.', async () => {

   expect(3).toBe(3)

  })


  test('function GET ALL.', async () => {

    await supertest(app).get("/api/inscripciones/").expect(200)
 
   })
})

