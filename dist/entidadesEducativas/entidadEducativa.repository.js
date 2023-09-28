import { EntidadEducativa } from './entidadEducativa.entity.js';
import { db_connection } from '../services/db.js';
export class CarreraRepository {
    async getAll() {
        const entidadeseducativas = [];
        (await db_connection).query("SELECT * FROM entidadeseducativas LIMIT 10", (err, rows, fields) => {
            for (var i = 0; i < rows.length; i++) {
                entidadeseducativas.push(new EntidadEducativa(rows[i].cue, rows[i].nombre, rows[i].direccion, rows[i].facultad, rows[i].localidad, rows[i].provincia, rows[i].pais));
            }
        });
        return entidadeseducativas;
    }
    async get(item) {
        const entidadEducativa = {
            cue: 0,
            nombre: '',
            direccion: '',
            facultad: '',
            localidad: '',
            provincia: '',
            pais: ''
        };
        return entidadEducativa;
    }
    add(item) {
        throw new Error('Method not implemented.');
    }
    update(item) {
        throw new Error('Method not implemented.');
    }
    delete(item) {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=entidadEducativa.repository.js.map