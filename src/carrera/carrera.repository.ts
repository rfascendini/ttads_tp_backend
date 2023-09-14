import { Repository } from '../shared/repository.js'
import { Carrera } from './carrera.entity.js'

const carreras = [
  new Carrera(
    1,
    'Ing en Sistemas',
  ),
]

export class CarreraRepository implements Repository<Carrera> {

  public findAll(): Carrera[] | undefined {
    return carreras
  }

  public findOne(item: { id: string }): Carrera | undefined {
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
