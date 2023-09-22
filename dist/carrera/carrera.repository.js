import { Carrera } from './carrera.entity.js';
import { db_connection } from '../services/db.js';
const carreras = [];
export class CarreraRepository {
    getAll() {
        db_connection.query("SELECT * FROM carreras LIMIT 10", (err, rows, fields) => {
            for (var i = 0; i < rows.length; i++) {
                carreras.push(new Carrera(rows[i].id, rows[i].nombre));
            }
        });
        return carreras;
    }
    get(item) {
        db_connection.query("SELECT * FROM carreras WHERE id = ?", [item.id], (err, rows, fields) => {
            for (var i = 0; i < rows.length; i++) {
                carreras.push(new Carrera(rows[i].id, rows[i].nombre));
            }
        });
        return carreras.find((carrera) => carrera.id.toString() === item.id);
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
//# sourceMappingURL=carrera.repository.js.map