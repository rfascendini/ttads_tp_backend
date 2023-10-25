import { Repository } from '../../shared/repository.js'
import { Inscripcion } from './inscripciones.entity.js'
import { AppDataSource } from '../../services/db.js'
const inscripcionRepository = AppDataSource.getRepository(Inscripcion)

export class InscripcionRepository implements Repository<Inscripcion> {

  public async getAll(): Promise<Inscripcion[] | undefined> {
    const inscripciones = await inscripcionRepository.find()
    return inscripciones
  }

  public async getByDNI(item: { dni: string, access_token: string }): Promise<Inscripcion | undefined> {
    const inscripcion = await inscripcionRepository.findOneBy({alumnonumerodocumento: item.dni,access_token: item.access_token})
    return inscripcion as Inscripcion
  }

  public async get(item: { id: string }): Promise<Inscripcion | undefined> {
    const inscripcion = await inscripcionRepository.findOneBy({ id: parseInt(item.id) })
    return inscripcion as Inscripcion
  }

  public add(item: Inscripcion): Promise<Inscripcion | undefined> {
    throw new Error('Method not implemented.')
  }

  public update(item: Inscripcion): Promise<Inscripcion | undefined> {
    throw new Error('Method not implemented.')
  }

  public delete(item: { id: string }): Promise<Inscripcion | undefined> {
    throw new Error('Method not implemented.')
  }

}
