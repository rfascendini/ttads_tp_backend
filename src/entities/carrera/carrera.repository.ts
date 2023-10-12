import { Repository } from '../../shared/repository.js'
import { Carrera } from './carrera.entity.js'
import { AppDataSource } from '../../services/db.js'
const carreraRepository = AppDataSource.getRepository(Carrera)


export class CarreraRepository implements Repository<Carrera> {

  public async getAll(): Promise<Carrera[] | undefined> {
    const carreras = await carreraRepository.find()
    return carreras
  }

  public async get(item: { id: string }): Promise<Carrera | undefined> {
    const carrera = await carreraRepository.findOneBy({ id: parseInt(item.id) })
    return carrera as Carrera
  }

  public add(item: Carrera): Promise<Carrera | undefined> {
    throw new Error('Method not implemented.')
  }

  public update(item: Carrera): Promise<Carrera | undefined> {
    throw new Error('Method not implemented.')
  }

  public delete(item: { id: string }): Promise<Carrera | undefined> {
    throw new Error('Method not implemented.')
  }

}
