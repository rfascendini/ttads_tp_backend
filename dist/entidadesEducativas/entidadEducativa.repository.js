"use strict";
// // import { Repository } from '../shared/repository.js'
// import { EntidadEducativa } from './entidadEducativa.entity.js'
// import { db_connection } from '../services/db.js'
// export class CarreraRepository implements Repository<EntidadEducativa> {
//   public async getAll(): Promise<EntidadEducativa[] | undefined> {
//     const entidadeseducativas: EntidadEducativa[] = [];
//     (await db_connection).query("SELECT * FROM entidadeseducativas LIMIT 10", (err: any, rows: any, fields: any) => {
//       for (var i = 0; i < rows.length; i++) {
//         entidadeseducativas.push(new EntidadEducativa(
//           rows[i].cue,
//           rows[i].nombre,
//           rows[i].direccion,
//           rows[i].facultad,
//           rows[i].localidad,
//           rows[i].provincia,
//           rows[i].pais
//         ))
//       }
//     });
//     return entidadeseducativas;
//   }
//   public async get(item: { id: string }): Promise<EntidadEducativa | undefined> {
//     const entidadEducativa: EntidadEducativa = {
//       cue: 0,
//       nombre: '',
//       direccion: '',
//       facultad: '',
//       localidad: '',
//       provincia: '',
//       pais: ''
//     };
//     return entidadEducativa
//   }
//   public add(item: EntidadEducativa): Promise<EntidadEducativa | undefined> {
//     throw new Error('Method not implemented.')
//   }
//   public update(item: EntidadEducativa): Promise<EntidadEducativa | undefined> {
//     throw new Error('Method not implemented.')
//   }
//   public delete(item: { id: string }): Promise<EntidadEducativa | undefined> {
//     throw new Error('Method not implemented.')
//   }
// }
//# sourceMappingURL=entidadEducativa.repository.js.map