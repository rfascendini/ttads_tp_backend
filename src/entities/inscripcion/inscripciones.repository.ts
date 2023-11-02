import { Repository } from '../../shared/repository.js'
import { Inscripcion } from './inscripciones.entity.js'
import { AppDataSource } from '../../services/db.js'
import { error } from 'console'
import { sendEmail } from '../../utils/sendEmail.js'

const inscripcionRepository = AppDataSource.getRepository(Inscripcion)

export class InscripcionRepository implements Repository<Inscripcion> {

  public async getAll(): Promise<Inscripcion[] | undefined> {
    const inscripciones = await inscripcionRepository.find()
    return inscripciones
  }

  public async getByDNI(item: { dni: string, access_token: string }): Promise<Inscripcion | undefined> {
    const inscripcion = await inscripcionRepository.findOneBy({ alumnonumerodocumento: item.dni, access_token: item.access_token })
    return inscripcion as Inscripcion
  }

  public async get(item: { id: string }): Promise<Inscripcion | undefined> {
    const inscripcion = await inscripcionRepository.findOneBy({ id: parseInt(item.id) })
    return inscripcion as Inscripcion
  }

  public async add(item: Inscripcion): Promise<Inscripcion | undefined> {

    const inscripcionExistente = await inscripcionRepository.findOneBy({
      alumnonumerodocumento: item.alumnonumerodocumento,
      nroTramiteDni: item.nroTramiteDni,
      contactoemail: item.contactoemail
    })

    if (inscripcionExistente == null) {

      const emailSended = sendEmail(item.contactoemail as string, item.access_token as string)

      console.log(emailSended);

      const inscripcion = await inscripcionRepository.save(item)
      return inscripcion as Inscripcion

    }
  }

  public async update(item: Inscripcion): Promise<Inscripcion | undefined> {
    throw error;
  }

  public async delete(item: { id: string }): Promise<Inscripcion | undefined> {
    throw error;
  }

}

