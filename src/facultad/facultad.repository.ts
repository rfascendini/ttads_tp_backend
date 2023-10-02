import { Repository } from '../shared/repository.js'
import { Facultad } from './facultad.entity.js'
import { AppDataSource } from '../services/db.js'
const facultadRepository = AppDataSource.getRepository(Facultad)


export class FacultadRepository implements Repository<Facultad> {

  public async getAll(): Promise<Facultad[] | undefined> {
    const facultades = await facultadRepository.find()
    return facultades
  }

  public async get(item: { id: string }): Promise<Facultad | undefined> {
    const facultad = await facultadRepository.findOneBy({ id: parseInt(item.id) })
    return facultad as Facultad
  }

  public add(item: Facultad): Promise<Facultad | undefined> {
    throw new Error('Method not implemented.')
  }

  public update(item: Facultad): Promise<Facultad | undefined> {
    throw new Error('Method not implemented.')
  }

  public delete(item: { id: string }): Promise<Facultad | undefined> {
    throw new Error('Method not implemented.')
  }

}
