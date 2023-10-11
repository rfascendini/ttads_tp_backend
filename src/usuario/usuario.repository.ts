import { Repository } from '../shared/repository.js'
import { Usuario } from './usuario.entity.js'
import { AppDataSource } from '../services/db.js'
const usuarioRepository = AppDataSource.getRepository(Usuario)


export class UsuarioRepository implements Repository<Usuario> {

  public async getAll(): Promise<Usuario[] | undefined> {
    const usuarios = await usuarioRepository.find()
    return usuarios
  }

  public async get(item: { id: string }): Promise<Usuario | undefined> {
    const usuario = await usuarioRepository.findOneBy({ id: parseInt(item.id) })
    return usuario as Usuario
  }

  public async getByUsername(item: { userName: string, password: string }): Promise<Usuario | undefined> {
    const usuario = await usuarioRepository.findOneBy({userName: item.userName,password: item.password})
    return usuario as Usuario
  }

  public add(item: Usuario): Promise<Usuario | undefined> {
    throw new Error('Method not implemented.')
  }

  public update(item: Usuario): Promise<Usuario | undefined> {
    throw new Error('Method not implemented.')
  }

  public delete(item: { id: string }): Promise<Usuario | undefined> {
    throw new Error('Method not implemented.')
  }

}
