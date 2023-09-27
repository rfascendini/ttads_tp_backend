import { Repository } from '../shared/repository.js'
import { Carrera } from './carrera.entity.js'
import { db_connection } from '../services/db.js'



export class CarreraRepository implements Repository<Carrera> {

  public async getAll(): Promise<Carrera[] | undefined> {

    const carreras: Carrera[] = [];

    const rows = await db_connection.execute("SELECT * FROM carreras LIMIT 10",[0])

    const data = (JSON.parse(JSON.stringify(rows[0])));

    data.forEach((item: { id: number; nombre: string; }) => carreras.push(item))
  
    console.log(carreras);

    return carreras

  }

  public async get(item: { id: string }): Promise<Carrera | undefined> {

    const carrera: Carrera = {
      id: 0,
      nombre: ''
    }

    const row = await db_connection.execute("SELECT * FROM carreras WHERE id = ?",[item.id])

    console.log(row);
  
    return carrera
  }
  
  public add(item: Carrera): Promise<Carrera | undefined> {
    throw new Error('Method not implemented.')
  }

  public update(item: Carrera): Promise<Carrera | undefined> {
    throw new Error('Method not implemented.')
  }

  public delete(item: { id: string }): Promise<Carrera | undefined>{
    throw new Error('Method not implemented.')
  }

}
