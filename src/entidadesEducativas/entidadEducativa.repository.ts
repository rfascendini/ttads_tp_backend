import { Repository } from '../shared/repository.js'
import { EntidadEducativa } from './entidadEducativa.entity.js'
import { db_connection } from '../services/db.js'



export class CarreraRepository implements Repository<EntidadEducativa> {

  public async getAll(): Promise<EntidadEducativa[] | undefined> {

    const entidadeseducativas: EntidadEducativa[] = [];

    const rows = await db_connection.execute("SELECT * FROM entidadeseducativas LIMIT 10")

    const data = (JSON.parse(JSON.stringify(rows[0])));

    data.forEach((item: {
      cue: number,
      nombre: string,
      direccion: string,
      facultad: string,
      localidad: string,
      provincia: string,
      pais: string
    }) => entidadeseducativas.push(item))

    return entidadeseducativas;
  }

  public async get(item: { id: string }): Promise<EntidadEducativa | undefined> {

    const entidadEducativa: EntidadEducativa = {
      cue: 0,
      nombre: '',
      direccion: '',
      facultad: '',
      localidad: '',
      provincia: '',
      pais: ''
    };

    const row = await db_connection.execute("SELECT * FROM entidadesEducativas WHERE cue = ?", [item.id])
    
    const data = (JSON.parse(JSON.stringify(row[0])));

    entidadEducativa.cue = data[0].id;
    entidadEducativa.nombre = data[0].nombre;
    entidadEducativa.direccion = data[0].direccion;
    entidadEducativa.facultad = data[0].facultad;
    entidadEducativa.localidad = data[0].localidad;
    entidadEducativa.provincia = data[0].provincia;
    entidadEducativa.pais = data[0].pais;

    return entidadEducativa
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


