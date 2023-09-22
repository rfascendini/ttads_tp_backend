import { Repository } from '../shared/repository.js'
import { EntidadEducativa } from './entidadEducativa.entity.js'
import { db_connection } from '../services/db.js'

const entidadeseducativas: EntidadEducativa[] = [];

export class CarreraRepository implements Repository<EntidadEducativa> {

  public getAll(): EntidadEducativa[] | undefined {

    db_connection.query("SELECT * FROM entidadeseducativas LIMIT 10", (err: any, rows: any, fields: any) => {
      for (var i = 0; i < rows.length; i++) {
        entidadeseducativas.push(new EntidadEducativa(
          rows[i].cue,
          rows[i].nombre,
          rows[i].direccion,
          rows[i].facultad,
          rows[i].localidad,
          rows[i].provincia,
          rows[i].pais
        ))
      }
    });

    return entidadeseducativas;
  }

  public get(item: { id: string }): EntidadEducativa | undefined {

    db_connection.query("SELECT * FROM entidadeseducativas WHERE cue = ?", [item.id], (err: any, rows: any, fields: any) => {
      for (var i = 0; i < rows.length; i++) {
        entidadeseducativas.push(new EntidadEducativa(
          rows[i].cue,
          rows[i].nombre,
          rows[i].direccion,
          rows[i].facultad,
          rows[i].localidad,
          rows[i].provincia,
          rows[i].pais))
      }
    });

    return entidadeseducativas.find((entidadEducativa) => entidadEducativa.cue.toString() === item.id)
  }

  public add(item: EntidadEducativa): EntidadEducativa | undefined {
    throw new Error('Method not implemented.')
  }

  public update(item: EntidadEducativa): EntidadEducativa | undefined {
    throw new Error('Method not implemented.')
  }

  public delete(item: { id: string }): EntidadEducativa | undefined {
    throw new Error('Method not implemented.')
  }

}
