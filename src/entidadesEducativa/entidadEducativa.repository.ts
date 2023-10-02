import { Repository } from '../shared/repository.js'
import { EntidadEducativa } from './entidadEducativa.entity.js'
import { AppDataSource } from '../services/db.js'
const entidadEducativaRepository = AppDataSource.getRepository(EntidadEducativa)

export class EntidadEducativaRepository implements Repository<EntidadEducativa> {

  public async getAll(): Promise<EntidadEducativa[] | undefined> {
    const entidadEducativas = await entidadEducativaRepository.find()
    return entidadEducativas
  }

  public async get(item: { id: string }): Promise<EntidadEducativa | undefined> {
    const entidadEducativa = await entidadEducativaRepository.findOneBy({ cue: parseInt(item.id) })
    return entidadEducativa as EntidadEducativa
  }

  public add(item: EntidadEducativa): Promise<EntidadEducativa | undefined> {
    throw new Error('Method not implemented.')
  }

  public update(item: EntidadEducativa): Promise<EntidadEducativa | undefined> {
    throw new Error('Method not implemented.')
  }

  public delete(item: { id: string }): Promise<EntidadEducativa | undefined> {
    throw new Error('Method not implemented.')
  }

}