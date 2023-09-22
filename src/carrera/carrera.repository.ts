import { Repository } from '../shared/repository.js'
import { Carrera } from './carrera.entity.js'
import { db_connection } from '../services/db.js'

const carreras: Carrera[] = [];

export class CarreraRepository implements Repository<Carrera> {

  public getAll(): Carrera[] | undefined {

    db_connection.query("SELECT * FROM carreras LIMIT 10", (err: any, rows: any, fields: any) => {
      for (var i = 0; i < rows.length; i++) {
        carreras.push(new Carrera(rows[i].id, rows[i].nombre))
      }
    });
    
    return carreras;

  }

  public get(item: { id: string }): Carrera | undefined {

    db_connection.query("SELECT * FROM carreras WHERE id = ?", [item.id], (err: any, rows: any, fields: any) => {
      for (var i = 0; i < rows.length; i++) {
        carreras.push(new Carrera(rows[i].id, rows[i].nombre))
      }
    });

    return carreras.find((carrera) => carrera.id.toString() === item.id)
  }
  
  public add(item: Carrera): Carrera | undefined {
    throw new Error('Method not implemented.')
  }

  public update(item: Carrera): Carrera | undefined {
    throw new Error('Method not implemented.')
  }

  public delete(item: { id: string }): Carrera | undefined {
    throw new Error('Method not implemented.')
  }

}
