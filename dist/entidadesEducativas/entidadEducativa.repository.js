"use strict";
// import { Repository } from '../shared/repository.js'
// import { EntidadEducativa } from './entidadEducativa.entity.js'
// import { db_connection } from '../services/db.js'
// export class CarreraRepository implements Repository<EntidadEducativa> {
//   public async getAll(): Promise<EntidadEducativa[] | undefined> {
//     const [entidadEducativa] = await db_connection.query('select * from entidadeseducativas limit 10')
//     return entidadEducativa as EntidadEducativa[]
//   }
//   public async get(item: { id: string }): Promise<EntidadEducativa | undefined> {
//     const [entidadEducativa] = await db_connection.query("select * from entidadeseducativas where cue = ?", [item.id])
//     return entidadEducativa as unknown as EntidadEducativa
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