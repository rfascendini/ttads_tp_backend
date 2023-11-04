import { Repository } from '../../shared/repository.js'
import { ConfiguracionParametro } from './configuracionParametros.entity.js'
import { AppDataSource } from '../../services/db.js'
const configuracionParametroRepository = AppDataSource.getRepository(ConfiguracionParametro)


export class ConfiguracionParametroRepository implements Repository<ConfiguracionParametro> {


  public async getAll(): Promise<ConfiguracionParametro[] | undefined> {
    const configuracionesParametros = await configuracionParametroRepository.find()
    return configuracionesParametros
  }

  get(_item: { id: string }): Promise<ConfiguracionParametro | undefined> {
    throw new Error('Method not implemented.')
  }

  public add(item: ConfiguracionParametro): Promise<ConfiguracionParametro | undefined> {
    throw new Error('Method not implemented.')
  }

  public update(item: ConfiguracionParametro): Promise<ConfiguracionParametro | undefined> {
    throw new Error('Method not implemented.')
  }

  public delete(item: { id: string }): Promise<ConfiguracionParametro | undefined> {
    throw new Error('Method not implemented.')
  }

}
