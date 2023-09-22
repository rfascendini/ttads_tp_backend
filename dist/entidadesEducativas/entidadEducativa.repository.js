import { EntidadEducativa } from './entidadEducativa.entity.js';
import { db_connection } from '../services/db.js';
const entidadeseducativas = [];
export class CarreraRepository {
    getAll() {
        db_connection.query("SELECT * FROM entidadeseducativas LIMIT 10", (err, rows, fields) => {
            for (var i = 0; i < rows.length; i++) {
                entidadeseducativas.push(new EntidadEducativa(rows[i].cue, rows[i].nombre, rows[i].direccion, rows[i].facultad, rows[i].localidad, rows[i].provincia, rows[i].pais));
            }
        });
        return entidadeseducativas;
    }
    get(item) {
        db_connection.query("SELECT * FROM entidadeseducativas WHERE cue = ?", [item.id], (err, rows, fields) => {
            for (var i = 0; i < rows.length; i++) {
                entidadeseducativas.push(new EntidadEducativa(rows[i].cue, rows[i].nombre, rows[i].direccion, rows[i].facultad, rows[i].localidad, rows[i].provincia, rows[i].pais));
            }
        });
        return entidadeseducativas.find((entidadEducativa) => entidadEducativa.cue.toString() === item.id);
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