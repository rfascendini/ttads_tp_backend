import { Repository } from '../shared/repository.js'
import { Materia } from './materia.entity.js'
import { AppDataSource } from '../services/db.js'
const materiaRepository = AppDataSource.getRepository(Materia)


export class MateriaRepository implements Repository<Materia> {

  public async getAll(): Promise<Materia[] | undefined> {
    const materias = await materiaRepository.find()
    return materias
  }

  public async get(item: { id: string }): Promise<Materia | undefined> {
    const materia = await materiaRepository.findOneBy({ id: parseInt(item.id) })
    return materia as Materia
  }

  public add(item: Materia): Promise<Materia | undefined> {
    throw new Error('Method not implemented.')
  }

  public update(item: Materia): Promise<Materia | undefined> {
    throw new Error('Method not implemented.')
  }

  public delete(item: { id: string }): Promise<Materia | undefined> {
    throw new Error('Method not implemented.')
  }

}
