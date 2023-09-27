import { db_connection } from '../services/db.js';
export class CarreraRepository {
    async getAll() {
        const carreras = [];
        const rows = await db_connection.execute("SELECT * FROM carreras LIMIT 10", [0]);
        const data = (JSON.parse(JSON.stringify(rows[0])));
        data.forEach((item) => carreras.push(item));
        console.log(carreras);
        return carreras;
    }
    async get(item) {
        const carrera = {
            id: 0,
            nombre: ''
        };
        const row = await db_connection.execute("SELECT * FROM carreras WHERE id = ?", [item.id]);
        console.log(row);
        return carrera;
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