import { db_connection } from '../services/db.js';
export class CarreraRepository {
    async getAll() {
        const entidadeseducativas = [];
        const rows = await db_connection.execute("SELECT * FROM entidadeseducativas LIMIT 10");
        const data = (JSON.parse(JSON.stringify(rows[0])));
        data.forEach((item) => entidadeseducativas.push(item));
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
        const row = await db_connection.execute("SELECT * FROM entidadesEducativas WHERE cue = ?", [item.id]);
        const data = (JSON.parse(JSON.stringify(row[0])));
        entidadEducativa.cue = data[0].id;
        entidadEducativa.nombre = data[0].nombre;
        entidadEducativa.direccion = data[0].direccion;
        entidadEducativa.facultad = data[0].facultad;
        entidadEducativa.localidad = data[0].localidad;
        entidadEducativa.provincia = data[0].provincia;
        entidadEducativa.pais = data[0].pais;
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